import { addPropertyControls, ControlType } from "framer"
import { useEffect } from "react"

/**
 * @framerDisableUnlink
 *
 * @framerSupportedLayoutWidth auto
 * @framerSupportedLayoutHeight auto
 */
export default function StopScroll(props) {
    const { toggle } = props

    return toggle ? (
        <style
            data-frameruni-stop-scroll
        >{`body { overflow: hidden !important; }`}</style>
    ) : (
        <></>
    )
}

StopScroll.displayName = "Stop Scroll"

addPropertyControls(StopScroll, {
    toggle: {
        type: ControlType.Boolean,
        title: "Block Scroll",
        description:
            "More components at [Framer University](https://frameruni.link/cc).",
    },
})
