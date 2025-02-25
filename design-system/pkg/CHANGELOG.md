# @keystar/ui

## 0.1.6

### Patch Changes

- 78c98496: A few updates and additions for work on the cloud app:

  - expose `HStack` and `VStack` components from the "layout" package
  - adjust `Tray` appearance on larger screens
  - fix `Button` icon appearance
  - expose `StatusLight` component from new "status-light" package

- 062ccf49: Export `SplitView` components from new "split-view" package.

## 0.1.5

### Patch Changes

- 0ab08c7c: add 'use client' pragma to exports

## 0.1.4

### Patch Changes

- f272b8ee: consolidate color-scheme logic surrounding ssr
- bf6a27bb: Update dashboard page to use card-like interface elements for
  collections and singletons.

  Related app changes:

  - declare side and main app panels as "inline-size" containers
  - less obtrusive change indicators on sidebar singleton
  - create `useLocalizedString` hook, which abstracts l10n message import to one
    location

  Related component library changes:

  - adjust `AnchorDOMProps` type; require "href" property and remove (MIME)
    "type" property
  - support "href" (and friends) on `ActionButton` component
  - expose `containerQueries` from "style" package
  - fix class list declaration issue, which was causing a warning from
    `FieldButton` component

## 0.1.3

### Patch Changes

- a048349f: introduce new `PasswordField` component

## 0.1.2

### Patch Changes

- e667fb9c: Allow users to resize parts of the UI:

  - the sidebar navigation pane
  - secondary fields, when `entryLayout='content'`

- aec6359b: Support "renderEmptyState" prop on `TableView` component.
- b30c4b45: Remove bespoke icon implementations.
- ef586da4: fixes a bug where non-interactive adornments block pointer events
- 6c58f038: introduce `nav-tree` package, and components
- 7fe8d2f4: Fix label and description support in `NumberField`
- 781884f9: tidy panels and collection table appearance

## 0.1.1

### Patch Changes

- b832e495: Layout refactor that moves some stuff out of the sidebar into an app
  header.

  Component library:

  - `/button` — fix class name order so consumer styles override.
  - `/overlays` — fix gutter between popover and viewport.

## 0.1.0

### Minor Changes

- 50105597: Update lucide icons to `v0.252.0`

  **Deleted:**

  - circleSlashedIcon
  - curlyBracesIcon
  - sidebarCloseIcon
  - sidebarIcon
  - sidebarOpenIcon
  - slashIcon
  - sortAscIcon
  - sortDescIcon
  - verifiedIcon

  **Added:**

  - activitySquareIcon
  - ampersandIcon
  - ampersandsIcon
  - appWindowIcon
  - arrowBigDownDashIcon
  - arrowBigLeftDashIcon
  - arrowBigRightDashIcon
  - arrowBigUpDashIcon
  - arrowDown01Icon
  - arrowDown10Icon
  - arrowDownAZIcon
  - arrowDownFromLineIcon
  - arrowDownLeftFromCircleIcon
  - arrowDownLeftSquareIcon
  - arrowDownNarrowWideIcon
  - arrowDownRightFromCircleIcon
  - arrowDownRightSquareIcon
  - arrowDownSquareIcon
  - arrowDownToDotIcon
  - arrowDownToLineIcon
  - arrowDownUpIcon
  - arrowDownWideNarrowIcon
  - arrowDownZAIcon
  - arrowLeftFromLineIcon
  - arrowLeftSquareIcon
  - arrowLeftToLineIcon
  - arrowRightFromLineIcon
  - arrowRightLeftIcon
  - arrowRightSquareIcon
  - arrowRightToLineIcon
  - arrowUp01Icon
  - arrowUp10Icon
  - arrowUpAZIcon
  - arrowUpFromDotIcon
  - arrowUpFromLineIcon
  - arrowUpLeftFromCircleIcon
  - arrowUpLeftSquareIcon
  - arrowUpNarrowWideIcon
  - arrowUpRightFromCircleIcon
  - arrowUpRightSquareIcon
  - arrowUpSquareIcon
  - arrowUpToLineIcon
  - arrowUpWideNarrowIcon
  - arrowUpZAIcon
  - atomIcon
  - badgeAlertIcon
  - badgeCheckIcon
  - badgeDollarSignIcon
  - badgeHelpIcon
  - badgeIcon
  - badgeInfoIcon
  - badgeMinusIcon
  - badgePercentIcon
  - badgePlusIcon
  - badgeXIcon
  - banIcon
  - barChartBigIcon
  - barChartHorizontalBigIcon
  - bellDotIcon
  - biohazardIcon
  - bookCopyIcon
  - bookDownIcon
  - bookKeyIcon
  - bookLockIcon
  - bookMarkedIcon
  - bookMinusIcon
  - bookPlusIcon
  - bookTemplateIcon
  - bookUp2Icon
  - bookUpIcon
  - bookXIcon
  - bracesIcon
  - bracketsIcon
  - cakeSliceIcon
  - candlestickChartIcon
  - candyCaneIcon
  - caseLowerIcon
  - caseSensitiveIcon
  - caseUpperIcon
  - cassetteTapeIcon
  - castleIcon
  - chevronDownSquareIcon
  - chevronLeftSquareIcon
  - chevronRightSquareIcon
  - chevronUpSquareIcon
  - churchIcon
  - circleDashedIcon
  - circleDollarSignIcon
  - circleDotDashedIcon
  - circleEqualIcon
  - circleOffIcon
  - circleSlash2Icon
  - circleSlashIcon
  - circuitBoardIcon
  - clipboardPasteIcon
  - clubIcon
  - combineIcon
  - contact2Icon
  - copyCheckIcon
  - copyMinusIcon
  - copyPlusIcon
  - copySlashIcon
  - copyXIcon
  - dessertIcon
  - disc2Icon
  - disc3Icon
  - donutIcon
  - doorClosedIcon
  - doorOpenIcon
  - dotIcon
  - ferrisWheelIcon
  - fileCode2Icon
  - fileStackIcon
  - foldHorizontalIcon
  - foldVerticalIcon
  - folderDotIcon
  - folderGit2Icon
  - folderGitIcon
  - folderKanbanIcon
  - folderOpenDotIcon
  - folderRootIcon
  - folderSyncIcon
  - ganttChartIcon
  - goalIcon
  - groupIcon
  - hotelIcon
  - iterationCcwIcon
  - iterationCwIcon
  - keyRoundIcon
  - keySquareIcon
  - layoutPanelLeftIcon
  - layoutPanelTopIcon
  - leafyGreenIcon
  - ligatureIcon
  - listFilterIcon
  - listRestartIcon
  - listTodoIcon
  - listTreeIcon
  - lollipopIcon
  - mailboxIcon
  - memoryStickIcon
  - menuSquareIcon
  - mergeIcon
  - messageSquareDashedIcon
  - messageSquarePlusIcon
  - messagesSquareIcon
  - monitorCheckIcon
  - monitorDotIcon
  - monitorDownIcon
  - monitorPauseIcon
  - monitorPlayIcon
  - monitorStopIcon
  - monitorUpIcon
  - monitorXIcon
  - moonStarIcon
  - moveDownIcon
  - moveDownLeftIcon
  - moveDownRightIcon
  - moveLeftIcon
  - moveRightIcon
  - moveUpIcon
  - moveUpLeftIcon
  - moveUpRightIcon
  - orbitIcon
  - panelBottomCloseIcon
  - panelBottomIcon
  - panelBottomInactiveIcon
  - panelBottomOpenIcon
  - panelLeftCloseIcon
  - panelLeftIcon
  - panelLeftInactiveIcon
  - panelLeftOpenIcon
  - panelRightCloseIcon
  - panelRightIcon
  - panelRightInactiveIcon
  - panelRightOpenIcon
  - panelTopCloseIcon
  - panelTopIcon
  - panelTopInactiveIcon
  - panelTopOpenIcon
  - parenthesesIcon
  - pcCaseIcon
  - piIcon
  - piSquareIcon
  - pilcrowSquareIcon
  - planeLandingIcon
  - planeTakeoffIcon
  - playSquareIcon
  - plugZap2Icon
  - pocketKnifeIcon
  - popcornIcon
  - popsicleIcon
  - presentationIcon
  - projectorIcon
  - radarIcon
  - radiationIcon
  - radioTowerIcon
  - rainbowIcon
  - ratIcon
  - receiptIcon
  - redoDotIcon
  - refreshCcwDotIcon
  - refreshCwOffIcon
  - repeat2Icon
  - replaceAllIcon
  - replaceIcon
  - rollerCoasterIcon
  - rowsIcon
  - satelliteDishIcon
  - satelliteIcon
  - saveAllIcon
  - scatterChartIcon
  - school2Icon
  - schoolIcon
  - scrollTextIcon
  - searchCheckIcon
  - searchCodeIcon
  - searchSlashIcon
  - searchXIcon
  - shapesIcon
  - shieldQuestionIcon
  - sigmaSquareIcon
  - spaceIcon
  - spadeIcon
  - sparkleIcon
  - sparklesIcon
  - spellCheck2Icon
  - spellCheckIcon
  - splitIcon
  - sprayCanIcon
  - squareAsteriskIcon
  - squareCodeIcon
  - squareDashedBottomCodeIcon
  - squareDashedBottomIcon
  - squareDotIcon
  - squareEqualIcon
  - squareGanttIcon
  - squareKanbanDashedIcon
  - squareKanbanIcon
  - squareSlashIcon
  - squareStackIcon
  - squirrelIcon
  - stepBackIcon
  - stepForwardIcon
  - storeIcon
  - testTube2Icon
  - testTubeIcon
  - testTubesIcon
  - textIcon
  - textQuoteIcon
  - textSelectIcon
  - touchpadIcon
  - touchpadOffIcon
  - undoDotIcon
  - unfoldHorizontalIcon
  - unfoldVerticalIcon
  - ungroupIcon
  - unplugIcon
  - user2Icon
  - userCheck2Icon
  - userCircle2Icon
  - userCircleIcon
  - userCog2Icon
  - userMinus2Icon
  - userPlus2Icon
  - userSquare2Icon
  - userSquareIcon
  - userX2Icon
  - users2Icon
  - variableIcon
  - videotapeIcon
  - wallet2Icon
  - walletCardsIcon
  - wallpaperIcon
  - warehouseIcon
  - wholeWordIcon
  - workflowIcon

  **Modified:**

  - accessibilityIcon
  - alarmCheckIcon
  - alarmClockIcon
  - alarmClockOffIcon
  - alarmMinusIcon
  - alarmPlusIcon
  - albumIcon
  - alignEndHorizontalIcon
  - alignEndVerticalIcon
  - alignHorizontalDistributeCenterIcon
  - alignHorizontalDistributeEndIcon
  - alignHorizontalDistributeStartIcon
  - alignHorizontalJustifyCenterIcon
  - alignHorizontalJustifyEndIcon
  - alignHorizontalJustifyStartIcon
  - alignHorizontalSpaceAroundIcon
  - alignHorizontalSpaceBetweenIcon
  - alignStartHorizontalIcon
  - alignStartVerticalIcon
  - alignVerticalDistributeCenterIcon
  - alignVerticalDistributeEndIcon
  - alignVerticalDistributeStartIcon
  - alignVerticalJustifyCenterIcon
  - alignVerticalJustifyEndIcon
  - alignVerticalJustifyStartIcon
  - alignVerticalSpaceAroundIcon
  - alignVerticalSpaceBetweenIcon
  - archiveIcon
  - archiveRestoreIcon
  - arrowBigDownIcon
  - arrowBigLeftIcon
  - arrowBigRightIcon
  - arrowBigUpIcon
  - arrowDownCircleIcon
  - arrowLeftCircleIcon
  - arrowLeftIcon
  - arrowLeftRightIcon
  - arrowRightCircleIcon
  - arrowUpDownIcon
  - arrowUpIcon
  - arrowUpLeftIcon
  - arrowUpRightIcon
  - atSignIcon
  - axeIcon
  - baggageClaimIcon
  - banknoteIcon
  - batteryFullIcon
  - batteryIcon
  - batteryLowIcon
  - batteryMediumIcon
  - bellIcon
  - bellMinusIcon
  - bellOffIcon
  - bellPlusIcon
  - bellRingIcon
  - bikeIcon
  - binaryIcon
  - boldIcon
  - boneIcon
  - bookIcon
  - botIcon
  - briefcaseIcon
  - building2Icon
  - buildingIcon
  - calculatorIcon
  - calendarCheckIcon
  - calendarDaysIcon
  - calendarIcon
  - calendarRangeIcon
  - calendarXIcon
  - citrusIcon
  - clipboardCheckIcon
  - clipboardCopyIcon
  - clipboardEditIcon
  - clipboardIcon
  - clipboardListIcon
  - clipboardSignatureIcon
  - clipboardTypeIcon
  - clipboardXIcon
  - cloudMoonIcon
  - columnsIcon
  - commandIcon
  - constructionIcon
  - contactIcon
  - copyIcon
  - cpuIcon
  - creditCardIcon
  - databaseBackupIcon
  - databaseIcon
  - diamondIcon
  - dice1Icon
  - dice2Icon
  - dice3Icon
  - dice4Icon
  - dice5Icon
  - dice6Icon
  - dicesIcon
  - discIcon
  - divideSquareIcon
  - fileCodeIcon
  - fileDigitIcon
  - fileLock2Icon
  - fileLockIcon
  - fileVideo2Icon
  - filmIcon
  - fishOffIcon
  - flaskRoundIcon
  - folderLockIcon
  - formInputIcon
  - functionSquareIcon
  - gamepadIcon
  - gaugeIcon
  - gridIcon
  - headphonesIcon
  - heartCrackIcon
  - heartHandshakeIcon
  - heartIcon
  - heartOffIcon
  - heartPulseIcon
  - historyIcon
  - imageIcon
  - infinityIcon
  - instagramIcon
  - keyIcon
  - keyboardIcon
  - laptop2Icon
  - layoutDashboardIcon
  - layoutGridIcon
  - layoutIcon
  - layoutListIcon
  - layoutTemplateIcon
  - lifeBuoyIcon
  - lightbulbIcon
  - lightbulbOffIcon
  - listChecksIcon
  - listEndIcon
  - lockIcon
  - mailIcon
  - mailsIcon
  - messageCircleIcon
  - microscopeIcon
  - microwaveIcon
  - minusSquareIcon
  - monitorIcon
  - monitorSmartphoneIcon
  - monitorSpeakerIcon
  - moonIcon
  - mouseIcon
  - networkIcon
  - packageIcon
  - parkingSquareOffIcon
  - pictureInPicture2Icon
  - pizzaIcon
  - plugIcon
  - plugZapIcon
  - plusSquareIcon
  - qrCodeIcon
  - radioIcon
  - radioReceiverIcon
  - rectangleHorizontalIcon
  - rectangleVerticalIcon
  - refreshCcwIcon
  - refreshCwIcon
  - rotateCcwIcon
  - rotateCwIcon
  - scale3dIcon
  - scrollIcon
  - searchIcon
  - serverIcon
  - sheetIcon
  - shuffleIcon
  - slackIcon
  - smartphoneChargingIcon
  - smartphoneIcon
  - smartphoneNfcIcon
  - speakerIcon
  - splineIcon
  - squareIcon
  - stretchHorizontalIcon
  - stretchVerticalIcon
  - sunDimIcon
  - sunMediumIcon
  - sunMoonIcon
  - tableIcon
  - tabletIcon
  - terminalSquareIcon
  - textCursorInputIcon
  - ticketIcon
  - toggleLeftIcon
  - toggleRightIcon
  - toyBrickIcon
  - trainIcon
  - trelloIcon
  - tv2Icon
  - tvIcon
  - umbrellaIcon
  - unlockIcon
  - usbIcon
  - veganIcon
  - vibrateIcon
  - videoIcon
  - walletIcon
  - xSquareIcon
  - youtubeIcon

### Patch Changes

- 944dbe67: text input paper cuts:

  - more vertical padding on `TextArea` component.
  - antialiased editor text, to match the rest of the app.

- 8a9fa5f8: Fix bug where popover fails to flip when invoked for the first time.
- 91857b9b: Update @react-aria/_, @react-stately/_, etc. to latest versions.
- 9f16e062: fix unwanted scrollbars, where appropriate
