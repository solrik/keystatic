import { useRadio } from '@react-aria/radio';
import { HTMLAttributes, useMemo, useRef } from 'react';

import { SlotProvider } from '@keystar/ui/slots';
import {
  FocusRing,
  classNames,
  css,
  tokenSchema,
  transition,
  useStyleProps,
} from '@keystar/ui/style';
import { Text } from '@keystar/ui/typography';
import { isReactText } from '@keystar/ui/utils';

import { useRadioProvider } from './context';
import { RadioProps } from './types';

export function Radio(props: RadioProps) {
  let { children, autoFocus, ...otherProps } = props;
  let styleProps = useStyleProps(otherProps);

  let inputRef = useRef<HTMLInputElement>(null);

  let radioGroupProps = useRadioProvider();
  let { state } = radioGroupProps;

  let { inputProps } = useRadio(
    { ...props, ...radioGroupProps },
    state,
    inputRef
  );

  const inputClassName = css({
    position: 'absolute',
    zIndex: 1,
    inset: `calc(${tokenSchema.size.space.regular} * -1)`, // expand hit area
    opacity: 0.0001,
  });
  const labelClassName = css({
    alignItems: 'flex-start',
    display: 'inline-flex',
    gap: tokenSchema.size.space.regular,
    position: 'relative',
    userSelect: 'none',
  });
  const slots = useMemo(
    () =>
      ({
        text: { color: 'inherit' },
        description: { color: 'neutralTertiary' },
      } as const),
    []
  );

  return (
    <label
      className={classNames(styleProps.className, labelClassName)}
      style={styleProps.style}
    >
      <FocusRing autoFocus={autoFocus}>
        <input
          {...inputProps}
          ref={inputRef}
          className={classNames(inputClassName)}
        />
      </FocusRing>
      <Indicator inputClassName={inputClassName} />
      <SlotProvider slots={slots}>
        {children && (
          <Content>
            {isReactText(children) ? <Text>{children}</Text> : children}
          </Content>
        )}
      </SlotProvider>
    </label>
  );
}

// Styled components
// -----------------------------------------------------------------------------

let sizeToken = tokenSchema.size.element.xsmall;
type IndicatorProps = { inputClassName: string };

const Indicator = (props: IndicatorProps) => {
  let { inputClassName } = props;

  return (
    <span
      className={classNames(
        css({
          backgroundColor: tokenSchema.color.background.canvas,
          borderRadius: tokenSchema.size.radius.full,
          color: tokenSchema.color.foreground.onEmphasis,
          display: 'flex',
          flexShrink: 0,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          height: sizeToken,
          width: sizeToken,

          // indicator icons
          '.ksv-radio-indicator': {
            opacity: 0,
            transform: `scale(0) translate3d(0, 0, 0)`,
            transition: transition(['opacity', 'transform']),
            willChange: 'opacity, transform',
          },

          // focus ring
          '::after': {
            borderRadius: tokenSchema.size.radius.full,
            content: '""',
            inset: 0,
            margin: 0,
            position: 'absolute',
            transition: transition(['box-shadow', 'margin'], {
              easing: 'easeOut',
            }),
          },
          [`.${inputClassName}[data-focus=visible] + &::after`]: {
            boxShadow: `0 0 0 ${tokenSchema.size.alias.focusRing} ${tokenSchema.color.alias.focusRing}`,
            margin: `calc(${tokenSchema.size.alias.focusRingGap} * -1)`,
          },

          // border / background
          '&::before': {
            border: `${tokenSchema.size.border.medium} solid ${tokenSchema.color.alias.borderIdle}`,
            borderRadius: `inherit`,
            content: '""',
            inset: 0,
            margin: 0,
            position: 'absolute',
            transition: transition(['border-color', 'border-width'], {
              duration: 'regular',
            }),
          },

          [`.${inputClassName}:disabled + &`]: {
            color: tokenSchema.color.alias.foregroundDisabled,
            '&::before': {
              borderColor: tokenSchema.color.alias.borderDisabled,
            },
          },
          [`.${inputClassName}:enabled:hover + &::before`]: {
            borderColor: tokenSchema.color.alias.borderHovered,
          },
          [`.${inputClassName}:enabled:active + &::before`]: {
            borderColor: tokenSchema.color.alias.borderPressed,
          },

          // checked states
          [`.${inputClassName}:checked + &`]: {
            '&::before': {
              borderWidth: `calc(${sizeToken} / 2)`,
            },

            '.ksv-radio-indicator': {
              opacity: 1,
              transform: `scale(1)`,
            },
          },
          [`.${inputClassName}:enabled:checked + &::before`]: {
            borderColor: tokenSchema.color.scale.indigo9,
          },
          [`.${inputClassName}:enabled:checked:hover + &::before`]: {
            borderColor: tokenSchema.color.scale.indigo10,
          },
          [`.${inputClassName}:enabled:checked:active + &::before`]: {
            borderColor: tokenSchema.color.scale.indigo11,
          },
        })
      )}
    >
      {/* firefox has issues when transform combined with transition on SVG; circumvent with this wrapper */}
      <span className="ksv-radio-indicator">
        <svg
          className="ksv:reset"
          fill="currentColor"
          height={12}
          viewBox="0 0 24 24"
          width={12}
        >
          <circle cx="12" cy="12" r="6" />
        </svg>
      </span>
    </span>
  );
};

const Content = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={classNames(
        css({
          color: tokenSchema.color.alias.foregroundIdle,
          display: 'grid',
          paddingTop: `calc((${sizeToken} - ${tokenSchema.fontsize.text.regular.capheight}) / 2)`,
          gap: tokenSchema.size.space.large,

          'input[type="radio"]:hover ~ &': {
            color: tokenSchema.color.alias.foregroundHovered,
          },

          'input[type="radio"]:disabled ~ &': {
            color: tokenSchema.color.alias.foregroundDisabled,
          },
        })
      )}
      {...props}
    />
  );
};
