import { log, outro as outroPrompt, note } from '@clack/prompts';
import color from 'picocolors';
import { Context } from '..';

export const outro = (ctx: Context) => {
  log.message('Your project is ready!');

  // By default `note` turns the contents grey. color.reset sets to the default terminal
  // colour but requires reset to be called for every line
  note(
    [
      color.reset(`  cd ${ctx.projectName}`),
      color.reset(`  ${ctx.packageManager} install`),
      color.reset(
        `  ${ctx.packageManager === 'npm' ? 'npm run' : ctx.packageManager} dev`
      ),
      color.reset(`  http://127.0.0.1:3000/keystatic`),
    ].join('\n'),
    'Next steps'
  );

  log.message(`If you have any questions or feedback reach out to us at:
https://github.com/Thinkmill/keystatic/discussions`);

  outroPrompt(`Happy coding ⚡️`);
};
