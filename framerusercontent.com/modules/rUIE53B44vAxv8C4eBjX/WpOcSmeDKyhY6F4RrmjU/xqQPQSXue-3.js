let t = (t, e) => async () => {
        let r = await t();
        return r[e];
    },
    e = () =>
    import ("./xqQPQSXue-4.js"),
    r = [t(e, "richText"), t(e, "richText1"), t(e, "richText2"), t(e, "richText3"), t(e, "richText4"), t(e, "richText5")];
export async function resolveRichTextSk(t) {
    let e = r[t];
    if (e) return await e();
}
export const __FramerMetadata__ = {
    "exports": {
        "resolveRichTextSk": {
            "type": "function",
            "annotations": {
                "framerContractVersion": "1"
            }
        },
        "__FramerMetadata__": {
            "type": "variable"
        }
    }
}