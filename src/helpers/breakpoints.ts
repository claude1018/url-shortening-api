import React from 'react';

function breakpoint(
  condition: number,
  desktopVer: string,
  tabletVer: string | null,
  mobileVer: string
) {
  if (condition > 1020) return desktopVer;
  if (condition > 520) return tabletVer !== null ? tabletVer : mobileVer;
  return mobileVer;
}

export default breakpoint;
