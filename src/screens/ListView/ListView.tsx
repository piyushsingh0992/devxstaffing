import React from "react";
import { BtnTerciary } from "../../components/BtnTerciary";
import { IconRegular } from "../../components/IconRegular";
import { Logo } from "../../components/Logo";
import { Bell } from "../../icons/Bell";
import { IconAdd011 } from "../../icons/IconAdd011";
import { IconAnalytics01 } from "../../icons/IconAnalytics01";
import { IconArchive02 } from "../../icons/IconArchive02";
import { IconArrowDown01Fill } from "../../icons/IconArrowDown01Fill";
import { IconArrowLeft03Sharp } from "../../icons/IconArrowLeft03Sharp";
import { IconArrowRight01Sharp } from "../../icons/IconArrowRight01Sharp";
import { IconBuilding03 } from "../../icons/IconBuilding03";
import { IconCalendar03 } from "../../icons/IconCalendar03";
import { IconContact01 } from "../../icons/IconContact01";
import { IconFile01 } from "../../icons/IconFile01";
import { IconFileExport } from "../../icons/IconFileExport";
import { IconFloppyDisk } from "../../icons/IconFloppyDisk";
import { IconInbox } from "../../icons/IconInbox";
import { IconLayout3Column } from "../../icons/IconLayout3Column";
import { IconLeftToRightListDash } from "../../icons/IconLeftToRightListDash";
import { IconLeftToRightListTriangle } from "../../icons/IconLeftToRightListTriangle";
import { IconMessage01 } from "../../icons/IconMessage01";
import { IconSetting01 } from "../../icons/IconSetting01";
import { IconShare02 } from "../../icons/IconShare02";
import { IconTarget01 } from "../../icons/IconTarget01";
import { IconWorkflowSquare08 } from "../../icons/IconWorkflowSquare08";
import { WeightRegular } from "../../icons/WeightRegular";

import img1 from "../../images/vector-7304.svg";
import img2 from "../../images/subtract-2.svg";
import img3 from "../../images/subtract-1.svg";
import img4 from "../../images/subtract.svg";
import img5 from "../../images/vector-7304.svg";
import img6 from "../../images/active-line.svg";
import img7 from "../../images/ellipse-2@2x.png";
import img8 from "../../images/frame-1597878361.svg";

export const ListView = (): JSX.Element => {
  return (
    <div className="bg-[#f4f5f5] flex flex-row justify-center w-full">
      <div className="bg-[#f4f5f5] overflow-hidden w-[1440px] h-[1257px]">
        <div className="relative w-[1442px] h-[1259px] -top-px -left-px">
          <div className="absolute w-[1442px] h-[1259px] top-0 left-0">
            <div className="flex flex-col w-[245px] h-[1211px] items-start gap-[16px] px-0 py-[16px] absolute top-[48px] left-0 bg-white border-r [border-right-style:solid] border-base-border-border-primary">
              <div className="flex items-center justify-between px-[12px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-medium-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-small-font-style)]">
                    My Private Stuff
                  </div>
                  <IconArrowDown01Fill className="!relative !w-[20px] !h-[20px]" />
                </div>
                <IconArrowLeft03Sharp className="!relative !w-[20px] !h-[20px]" />
              </div>
              <div className="flex flex-col items-start gap-[12px] relative flex-1 self-stretch w-full grow">
                <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <IconLeftToRightListDash
                      className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]"
                      color="#8C8EA5"
                    />
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                      Lists
                    </div>
                  </div>
                  <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <IconInbox className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                      Inbox
                    </div>
                    <div className="inline-flex min-w-[28px] h-[20px] items-center justify-center gap-[4px] px-[6px] py-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] bg-base-primary-accent-light rounded-[999px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-base-primary-accent text-[14px] tracking-[-0.40px] leading-[19.6px] whitespace-nowrap">
                        17
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <IconMessage01 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                      Chat
                    </div>
                    <div className="inline-flex min-w-[28px] h-[20px] items-center justify-center gap-[4px] px-[6px] py-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] bg-base-primary-accent-light rounded-[999px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-base-primary-accent text-[14px] tracking-[-0.40px] leading-[19.6px] whitespace-nowrap">
                        6
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <IconArchive02 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                      Files
                    </div>
                    <div className="inline-flex min-w-[28px] h-[20px] items-center justify-center gap-[4px] px-[6px] py-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] bg-primitives-midnight-midnight-100 rounded-[999px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-base-content-medium-emphasis text-[14px] tracking-[-0.40px] leading-[19.6px] whitespace-nowrap">
                        163
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <IconFile01 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                      Docs
                    </div>
                    <div className="inline-flex min-w-[28px] h-[20px] items-center justify-center gap-[4px] px-[6px] py-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] bg-primitives-midnight-midnight-100 rounded-[999px]">
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-base-content-medium-emphasis text-[14px] tracking-[-0.40px] leading-[19.6px] whitespace-nowrap">
                        107
                      </div>
                    </div>
                  </div>
                  <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <IconContact01 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                    <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                      Contacts
                    </div>
                  </div>
                </div>
                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Vector"
                  src={img1}
                />
                <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex h-[32px] items-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                    <div className="flex w-[25.5px] h-[25.5px] items-center justify-center gap-[6px] p-[3px] relative mt-[-4.75px] mb-[-4.75px] ml-[-0.75px] rounded-[1198.8px] border-[0.75px] border-solid border-base-border-border-primary [background:linear-gradient(180deg,rgb(255,255,255)_0%,rgb(237.31,237.31,237.31)_100%)]">
                      <div className="absolute w-[24px] h-[20px] top-[2px] left-0 bg-white rounded-[1.5px] opacity-40" />
                      <div className="relative w-[12.6px] h-[14px]">
                        <div className="relative w-[13px] h-[14px]">
                          <img
                            className="absolute w-[6px] h-[11px] top-px left-[4px]"
                            alt="Subtract"
                            src={img2}
                          />
                          <img
                            className="absolute w-[7px] h-[14px] top-0 left-0"
                            alt="Subtract"
                            src={img3}
                          />
                          <img
                            className="absolute w-[5px] h-[9px] top-[3px] left-[8px]"
                            alt="Subtract"
                            src={img4}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 mt-[-1.50px] font-[number:var(--other-detail-xsmall-bold-font-weight)] text-base-content-high-emphasis tracking-[var(--other-detail-xsmall-bold-letter-spacing)] relative font-other-detail-xsmall-bold text-[length:var(--other-detail-xsmall-bold-font-size)] leading-[var(--other-detail-xsmall-bold-line-height)] [font-style:var(--other-detail-xsmall-bold-font-style)]">
                      COMPASS COLLECTIVE
                    </div>
                    <IconSetting01 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                  </div>
                  <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                      <IconShare02 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                      <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                        Organization space
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[4px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                      <IconTarget01 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                      <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-bold-small-bold font-[number:var(--paragraph-bold-small-bold-font-weight)] text-base-departments-marketing text-[length:var(--paragraph-bold-small-bold-font-size)] tracking-[var(--paragraph-bold-small-bold-letter-spacing)] leading-[var(--paragraph-bold-small-bold-line-height)] [font-style:var(--paragraph-bold-small-bold-font-style)]">
                        Marketing
                      </div>
                    </div>
                    <div className="h-[32px] items-center justify-center gap-[8px] pl-[40px] pr-[12px] py-[8px] rounded-[8px] flex relative self-stretch w-full">
                      <IconLeftToRightListDash
                        className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]"
                        color="#8C8EA5"
                      />
                      <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                        Lists
                      </div>
                      <div className="inline-flex min-w-[28px] h-[20px] items-center justify-center gap-[4px] px-[6px] py-0 relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px] bg-primitives-midnight-midnight-100 rounded-[999px]">
                        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-base-content-medium-emphasis text-[14px] tracking-[-0.40px] leading-[19.6px] whitespace-nowrap">
                          44
                        </div>
                      </div>
                    </div>
                    <div className="flex h-[32px] items-center justify-center gap-[8px] pl-[64px] pr-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                      <IconLeftToRightListTriangle className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                      <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                        Structure
                      </div>
                    </div>
                  </div>
                  <div className="flex-col items-start gap-[4px] flex-[0_0_auto] flex relative self-stretch w-full">
                    <div className="flex h-[32px] items-center justify-center gap-[8px] px-[12px] py-[8px] relative self-stretch w-full rounded-[8px]">
                      <IconAnalytics01 className="!relative !w-[20px] !h-[20px] !mt-[-2.00px] !mb-[-2.00px]" />
                      <div className="relative flex-1 mt-[-3.00px] mb-[-1.00px] font-paragraph-bold-small-bold font-[number:var(--paragraph-bold-small-bold-font-weight)] text-base-departments-finance text-[length:var(--paragraph-bold-small-bold-font-size)] tracking-[var(--paragraph-bold-small-bold-letter-spacing)] leading-[var(--paragraph-bold-small-bold-line-height)] [font-style:var(--paragraph-bold-small-bold-font-style)]">
                        Finance
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className="relative self-stretch w-full h-px object-cover"
                  alt="Vector"
                  src={img5}
                />
                <div className="relative flex-1 w-[26px] grow bg-[#d9d9d9] opacity-0" />
              </div>
              <div className="flex w-[243px] h-[48px] items-center gap-[9px] px-[12px] py-[8px] absolute top-[1161px] left-0 border-t [border-top-style:solid] border-base-border-border-primary">
                <IconBuilding03 className="!relative !w-[20px] !h-[20px]" />
                <div className="relative flex-1 font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                  Join or create org
                </div>
              </div>
            </div>
            <div className="flex flex-col w-[1197px] items-start justify-center gap-[8px] px-0 py-[20px] absolute top-[49px] left-[244px] rounded-[8px] overflow-hidden">
              <div className="flex h-[72px] items-center justify-between px-[40px] py-0 relative self-stretch w-full">
                <div className="inline-flex flex-col items-start justify-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-[4px] relative flex-[0_0_auto]">
                    <div className="w-[63px] mt-[-1.00px] font-[number:var(--paragraph-regular-xsmall-font-weight)] text-base-content-medium-emphasis tracking-[var(--paragraph-regular-xsmall-letter-spacing)] overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:1] [-webkit-box-orient:vertical] relative font-paragraph-regular-xsmall text-[length:var(--paragraph-regular-xsmall-font-size)] leading-[var(--paragraph-regular-xsmall-line-height)] [font-style:var(--paragraph-regular-xsmall-font-style)]">
                      Compass Collective
                    </div>
                    <IconArrowRight01Sharp className="!relative !w-[16px] !h-[16px]" />
                    <div className="relative w-fit mt-[-1.00px] font-paragraph-regular-xsmall font-[number:var(--paragraph-regular-xsmall-font-weight)] text-base-content-medium-emphasis text-[length:var(--paragraph-regular-xsmall-font-size)] tracking-[var(--paragraph-regular-xsmall-letter-spacing)] leading-[var(--paragraph-regular-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-xsmall-font-style)]">
                      Marketing
                    </div>
                    <IconArrowRight01Sharp className="!relative !w-[16px] !h-[16px]" />
                    <div className="relative w-fit mt-[-1.00px] font-paragraph-regular-xsmall font-[number:var(--paragraph-regular-xsmall-font-weight)] text-base-content-medium-emphasis text-[length:var(--paragraph-regular-xsmall-font-size)] tracking-[var(--paragraph-regular-xsmall-letter-spacing)] leading-[var(--paragraph-regular-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-xsmall-font-style)]">
                      Lists
                    </div>
                    <IconArrowRight01Sharp className="!relative !w-[16px] !h-[16px]" />
                    <div className="relative w-fit mt-[-1.00px] font-paragraph-regular-xsmall font-[number:var(--paragraph-regular-xsmall-font-weight)] text-base-content-medium-emphasis text-[length:var(--paragraph-regular-xsmall-font-size)] tracking-[var(--paragraph-regular-xsmall-letter-spacing)] leading-[var(--paragraph-regular-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-xsmall-font-style)]">
                      Main Focus
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-heading-heading-4 font-[number:var(--heading-heading-4-font-weight)] text-base-content-high-emphasis text-[length:var(--heading-heading-4-font-size)] tracking-[var(--heading-heading-4-letter-spacing)] leading-[var(--heading-heading-4-line-height)] whitespace-nowrap [font-style:var(--heading-heading-4-font-style)]">
                      Main Focus List
                    </div>
                    <IconRegular
                      className="!flex-[0_0_auto]"
                      size="regular"
                      stateProp="normal"
                    />
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-[12px] relative flex-[0_0_auto]">
                  <BtnTerciary
                    className="!flex-[0_0_auto]"
                    prop="Share"
                    stateProp="normal"
                  />
                  <BtnTerciary
                    className="!flex-[0_0_auto]"
                    icon={
                      <IconWorkflowSquare08 className="!relative !w-[20px] !h-[20px] !mt-[-4.00px] !mb-[-4.00px]" />
                    }
                    prop="Workflow"
                    stateProp="normal"
                  />
                  <BtnTerciary
                    className="!flex-[0_0_auto]"
                    icon={
                      <IconFileExport className="!relative !w-[20px] !h-[20px] !mt-[-4.00px] !mb-[-4.00px]" />
                    }
                    prop="Export"
                    stateProp="normal"
                  />
                  <button className="inline-flex h-[34px] items-center justify-center gap-[4px] pl-[8px] pr-[12px] py-[12px] relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] mr-[-1.00px] bg-base-primary-accent rounded-[8px] overflow-hidden border border-solid border-[#744eb4] shadow-button-btn-primary all-[unset] box-border">
                    <IconAdd011
                      className="!relative !w-[20px] !h-[20px] !mt-[-6.00px] !mb-[-4.00px]"
                      color="white"
                    />
                    <div className="relative w-fit mt-[-6.00px] mb-[-4.00px] font-paragraph-bold-small-bold font-[number:var(--paragraph-bold-small-bold-font-weight)] text-primitives-neutral-white text-[length:var(--paragraph-bold-small-bold-font-size)] tracking-[var(--paragraph-bold-small-bold-letter-spacing)] leading-[var(--paragraph-bold-small-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-small-bold-font-style)]">
                      Task
                    </div>
                  </button>
                </div>
              </div>
              <div className="flex h-[40px] items-center justify-between px-[40px] py-0 relative self-stretch w-full border-b [border-bottom-style:solid] border-base-border-border-primary">
                <div className="inline-flex items-center justify-center gap-[12px] relative self-stretch flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[8px] relative self-stretch flex-[0_0_auto]">
                    <IconLeftToRightListDash
                      className="!relative !w-[20px] !h-[20px]"
                      color="#8C51ED"
                    />
                    <div className="relative w-fit font-paragraph-bold-small-bold font-[number:var(--paragraph-bold-small-bold-font-weight)] text-base-primary-accent text-[length:var(--paragraph-bold-small-bold-font-size)] tracking-[var(--paragraph-bold-small-bold-letter-spacing)] leading-[var(--paragraph-bold-small-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-small-bold-font-style)]">
                      Grid
                    </div>
                    <IconArrowDown01Fill className="!relative !w-[20px] !h-[20px]" />
                    <img
                      className="absolute w-[85px] h-[2px] top-[38px] left-0 object-cover"
                      alt="Active line"
                      src={img6}
                    />
                  </div>
                  <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[8px] relative self-stretch flex-[0_0_auto]">
                    <IconLayout3Column className="!relative !w-[20px] !h-[20px]" />
                    <div className="relative w-fit font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-small-font-style)]">
                      Board
                    </div>
                    <IconArrowDown01Fill className="!relative !w-[20px] !h-[20px]" />
                  </div>
                  <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[8px] relative self-stretch flex-[0_0_auto]">
                    <IconCalendar03 className="!relative !w-[20px] !h-[20px]" />
                    <div className="relative w-fit font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-high-emphasis text-[length:var(--paragraph-regular-small-font-size)] tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-small-font-style)]">
                      Calendar
                    </div>
                    <IconArrowDown01Fill className="!relative !w-[20px] !h-[20px]" />
                  </div>
                </div>
                <IconRegular
                  className="!flex-[0_0_auto]"
                  icon={
                    <IconFloppyDisk className="!relative !w-[20px] !h-[20px]" />
                  }
                  size="regular"
                  stateProp="normal"
                />
              </div>
            </div>
            <div className="flex w-[1442px] h-[50px] items-center justify-between px-[16px] py-[8px] absolute top-0 left-0 bg-white border-b [border-bottom-style:solid] border-base-border-border-primary">
              <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
                <Logo className="!h-[29.75px] !mt-[-0.88px] !ml-[-0.88px] !mb-[-0.88px] !w-[29.75px]" />
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-[#8912fe] text-[12px] tracking-[-0.10px] leading-[16.8px] whitespace-nowrap">
                  Atavya
                </div>
              </div>
              <div className="inline-flex items-center gap-[22px] relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[8px] relative flex-[0_0_auto]">
                  <div className="flex w-[36px] h-[24px] items-center gap-[8px] p-[4px] relative mt-[-2.00px] mb-[-2.00px] ml-[-2.00px] bg-base-border-border-primary rounded-[999px] overflow-hidden border border-solid shadow-[0px_2px_2px_#1721460d,inset_0px_-1px_4px_#0000000d,inset_0px_0px_0px_2px_#ffffff] border-base-border-border-primary">
                    <div className="relative w-[12px] h-[12px] mt-[-1.00px] ml-[-1.00px] bg-primitives-neutral-white rounded-[999px] shadow-[1px_1px_1px_#00000005]" />
                  </div>
                  <div className="relative w-fit font-paragraph-regular-xsmall font-[number:var(--paragraph-regular-xsmall-font-weight)] text-base-content-medium-emphasis text-[length:var(--paragraph-regular-xsmall-font-size)] tracking-[var(--paragraph-regular-xsmall-letter-spacing)] leading-[var(--paragraph-regular-xsmall-line-height)] whitespace-nowrap [font-style:var(--paragraph-regular-xsmall-font-style)]">
                    Focus
                  </div>
                </div>
                <div className="inline-flex h-[34px] items-center justify-center gap-[8px] pl-[8px] pr-[12px] py-[12px] relative flex-[0_0_auto] mt-[-1.00px] mb-[-1.00px] bg-white rounded-[8px] overflow-hidden border border-solid border-base-border-border-primary shadow-[inset_0px_-1px_4px_#0000000d]">
                  <IconAdd011
                    className="!relative !w-[20px] !h-[20px] !mt-[-6.00px] !mb-[-4.00px]"
                    color="#8C51ED"
                  />
                  <div className="relative w-fit mt-[-6.00px] mb-[-4.00px] font-paragraph-bold-small-bold font-[number:var(--paragraph-bold-small-bold-font-weight)] text-base-primary-accent text-[length:var(--paragraph-bold-small-bold-font-size)] tracking-[var(--paragraph-bold-small-bold-letter-spacing)] leading-[var(--paragraph-bold-small-bold-line-height)] whitespace-nowrap [font-style:var(--paragraph-bold-small-bold-font-style)]">
                    New
                  </div>
                </div>
                <Bell
                  className="!relative !w-[20px] !h-[20px]"
                  color="#8C8EA5"
                />
                <div className="relative w-[34.29px] h-[34.29px] mt-[-1.14px] mb-[-1.14px] mr-[-1.14px] rounded-[940.24px] overflow-hidden border-[1.14px] border-solid border-[#7bbd6b] shadow-[inset_0px_0px_0px_#ffffff]">
                  <img
                    className="absolute w-[30px] h-[30px] top-px left-px object-cover"
                    alt="Ellipse"
                    src={img7}
                  />
                </div>
              </div>
              <div className="flex w-[406px] h-[30px] items-center justify-center gap-[8px] px-[8px] py-[12px] absolute top-[9px] left-[517px] bg-primitives-neutral-white rounded-[8px] overflow-hidden border border-solid border-base-border-border-primary">
                <WeightRegular
                  className="!relative !w-[20px] !h-[20px] !mt-[-8.00px] !mb-[-6.00px]"
                  color="#8C8EA5"
                />
                <p className="relative flex-1 mt-[-8.00px] mb-[-6.00px] font-paragraph-regular-small font-[number:var(--paragraph-regular-small-font-weight)] text-base-content-low-emphasis text-[length:var(--paragraph-regular-small-font-size)] text-center tracking-[var(--paragraph-regular-small-letter-spacing)] leading-[var(--paragraph-regular-small-line-height)] [font-style:var(--paragraph-regular-small-font-style)]">
                  Search for lists, tasks or files
                </p>
                <img
                  className="relative flex-[0_0_auto] mt-[-8.00px] mb-[-6.00px]"
                  alt="Frame"
                  src={img8}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
