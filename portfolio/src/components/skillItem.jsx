import React from "react";
import { ArrowRightIcon  } from "@phosphor-icons/react";

function SkillItem({name}) {
    return (
        <div className="skill-item">
            <ArrowRightIcon size={28} className="arrowIcon" />
            <p>{name}</p>
        </div>
    )
}

export default SkillItem;