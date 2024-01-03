import React from "react";
import { BtnTerciary } from "../../components/BtnTerciary";
import { IconRegular } from "../../components/IconRegular";
import { Logo } from "../../components/Logo";
import { Bell } from "../../icons/Bell";
import { IconAdd011 } from "../../icons/IconAdd011";
import { IconAnalytics011 } from "../../icons/IconAnalytics011";
import { IconArchive021 } from "../../icons/IconArchive021";
import { IconArrowDown01Fill4 } from "../../icons/IconArrowDown01Fill4";
import { IconArrowLeft03Sharp1 } from "../../icons/IconArrowLeft03Sharp1";
import { IconArrowRight01Sharp3 } from "../../icons/IconArrowRight01Sharp3";
import { IconBuilding031 } from "../../icons/IconBuilding031";
import { IconCalendar031 } from "../../icons/IconCalendar031";
import { IconContact011 } from "../../icons/IconContact011";
import { IconFile011 } from "../../icons/IconFile011";
import { IconFileExport1 } from "../../icons/IconFileExport1";
import { IconFloppyDisk1 } from "../../icons/IconFloppyDisk1";
import { IconInbox1 } from "../../icons/IconInbox1";
import { IconLayout3Column1 } from "../../icons/IconLayout3Column1";
import { IconLeftToRightListDash3 } from "../../icons/IconLeftToRightListDash3";
import { IconLeftToRightListTriangle1 } from "../../icons/IconLeftToRightListTriangle1";
import { IconMessage011 } from "../../icons/IconMessage011";
import { IconSetting011 } from "../../icons/IconSetting011";
import { IconShare021 } from "../../icons/IconShare021";
import { IconTarget011 } from "../../icons/IconTarget011";
import { IconWorkflowSquare081 } from "../../icons/IconWorkflowSquare081";
import { WeightRegular } from "../../icons/WeightRegular";
import "./style.css";

import img1 from "../../images/vector-7304.svg";
import img2 from "../../images/subtract-2.svg";
import img3 from "../../images/subtract-1.svg";
import img4 from "../../images/subtract.svg";
import img6 from "../../images/active-line.svg";
import img7 from "../../images/ellipse-2@2x.png";
import img8 from "../../images/frame-1597878361.svg";


export const ListView = (): JSX.Element => {
  return (
    <div className="list-view">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="frame">
              <div className="div">
                <div className="frame-2">
                  <div className="text-wrapper">My Private Stuff</div>
                  <IconArrowDown01Fill4 className="icon-instance-node" />
                </div>
                <IconArrowLeft03Sharp1 className="icon-instance-node" />
              </div>
              <div className="frame-3">
                <div className="div-2">
                  <div className="frame-4">
                    <IconLeftToRightListDash3 className="icon-instance-node-2" color="#8C8EA5" />
                    <div className="text-wrapper-2">Lists</div>
                  </div>
                  <div className="frame-4">
                    <IconInbox1 className="icon-instance-node-2" />
                    <div className="text-wrapper-2">Inbox</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-3">17</div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <IconMessage011 className="icon-instance-node-2" />
                    <div className="text-wrapper-2">Chat</div>
                    <div className="div-wrapper">
                      <div className="text-wrapper-3">6</div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <IconArchive021 className="icon-instance-node-2" />
                    <div className="text-wrapper-2">Files</div>
                    <div className="frame-5">
                      <div className="text-wrapper-4">163</div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <IconFile011 className="icon-instance-node-2" />
                    <div className="text-wrapper-2">Docs</div>
                    <div className="frame-5">
                      <div className="text-wrapper-4">107</div>
                    </div>
                  </div>
                  <div className="frame-4">
                    <IconContact011 className="icon-instance-node-2" />
                    <div className="text-wrapper-2">Contacts</div>
                  </div>
                </div>

                <div className="div-2">
                  <div className="frame-6">
                    <div className="frame-7">
                      <div className="rectangle-2" />
                      <div className="group">
                        <div className="overlap-group-2">
                          <img
                            className="subtract"
                            alt="Subtract"
                            src={img4}
                          />
                          <img
                            className="img"
                            alt="Subtract"
                            src={img3}
                          />
                          <img
                            className="subtract-2"
                            alt="Subtract"
                            src={img2}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="compass-collective">COMPASS COLLECTIVE</div>
                    <IconSetting011 className="icon-instance-node-2" />

                  </div>
                  <div className="div-2">
                    <div className="frame-4">
                      <IconShare021 className="icon-instance-node-2" />
                      <div className="text-wrapper-2">Organization space</div>
                    </div>
                  </div>
                  <div className="div-2">
                    <div className="frame-4">
                      <IconTarget011 className="icon-instance-node-2" />
                      <div className="text-wrapper-5">Marketing</div>
                    </div>
                    <div className="frame-8">
                      <IconLeftToRightListDash3 className="icon-instance-node-2" color="#8C8EA5" />
                      <div className="text-wrapper-2">Lists</div>
                      <div className="frame-5">
                        <div className="text-wrapper-4">44</div>
                      </div>
                    </div>
                    <div className="frame-9">
                      <IconLeftToRightListTriangle1 className="icon-instance-node-2" />
                      <div className="text-wrapper-2">Structure</div>
                    </div>
                  </div>
                  <div className="div-2">
                    <div className="frame-4">
                      <IconAnalytics011 className="icon-instance-node-2" />
                      <div className="text-wrapper-6">Finance</div>
                    </div>
                  </div>
                </div>

                <div className="rectangle-3" />
              </div>
              <div className="frame-10">
                <IconBuilding031 className="icon-instance-node" />
                <div className="text-wrapper-7">Join or create org</div>
              </div>
            </div>
            <div className="main">
              <div className="title-and-main-info">
                <div className="frame-11">
                  <div className="frame-12">
                    <div className="text-wrapper-8">Compass Collective</div>
                    <IconArrowRight01Sharp3 className="icon-arrow-right" />
                    <div className="text-wrapper-9">Marketing</div>
                    <IconArrowRight01Sharp3 className="icon-arrow-right" />
                    <div className="text-wrapper-9">Lists</div>
                    <IconArrowRight01Sharp3 className="icon-arrow-right" />
                    <div className="text-wrapper-9">Main Focus</div>
                  </div>
                  <div className="frame-2">
                    <div className="text-wrapper-10">Main Focus List</div>
                    <IconRegular className="design-component-instance-node" size="regular" stateProp="normal" />
                  </div>
                </div>
                <div className="frame-13">
                  <BtnTerciary className="design-component-instance-node" prop="Share" stateProp="normal" />
                  <BtnTerciary
                    className="design-component-instance-node"
                    icon={<IconWorkflowSquare081 className="icon-instance-node-3" />}
                    prop="Workflow"
                    stateProp="normal"
                  />
                  <BtnTerciary
                    className="design-component-instance-node"
                    icon={<IconFileExport1 className="icon-instance-node-3" />}
                    prop="Export"
                    stateProp="normal"
                  />
                  <button className="button">
                    <IconAdd011 className="icon-add" color="white" />
                    <div className="text-wrapper-11">Task</div>
                  </button>
                </div>
              </div>
              <div className="views-bar">
                <div className="frame-14">
                  <div className="frame-15">
                    <IconLeftToRightListDash3 className="icon-instance-node" color="#8C51ED" />
                    <div className="text-wrapper-12">Grid</div>
                    <IconArrowDown01Fill4 className="icon-instance-node" />
                    <img
                      className="active-line"
                      alt="Active line"
                      src={img6}
                    />
                  </div>
                  <div className="frame-15">
                    <IconLayout3Column1 className="icon-instance-node" />
                    <div className="text-wrapper-13">Board</div>
                    <IconArrowDown01Fill4 className="icon-instance-node" />
                  </div>
                  <div className="frame-15">
                    <IconCalendar031 className="icon-instance-node" />
                    <div className="text-wrapper-13">Calendar</div>
                    <IconArrowDown01Fill4 className="icon-instance-node" />
                  </div>
                </div>
                <IconRegular
                  className="design-component-instance-node"
                  icon={<IconFloppyDisk1 className="icon-instance-node" />}
                  size="regular"
                  stateProp="normal"
                />
              </div>
            </div>
            <div className="frame-16">
              <div className="frame-17">
                <Logo className="logo-instance" />
                <div className="text-wrapper-14">Atavya</div>
              </div>
              <div className="frame-18">
                <div className="frame-2">
                  <div className="toggle">
                    <div className="frame-19" />
                  </div>
                  <div className="text-wrapper-15">Focus</div>
                </div>
                <div className="frame-20">
                  <IconAdd011 className="icon-add" color="#8C51ED" />
                  <div className="text-wrapper-16">New</div>
                </div>
                <Bell className="icon-instance-node" color="#8C8EA5" />
                <div className="ellipse-wrapper">
                  <img className="ellipse" alt="Ellipse" src={img7} />
                </div>
              </div>
              <div className="frame-21">
                <WeightRegular className="magnifying-glass" color="#8C8EA5" />
                <p className="p">Search for lists, tasks or files</p>
                <img className="frame-22" alt="Frame" src={img8} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
