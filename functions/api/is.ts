export const is = [
    '"insane"',
    "taking risks",
    "touching grass",
    "lost in thought",
    "charting waters",
    "forgetting something",
    "a random oracle",
    "pushing luck",
    "living dangerously",
    "finally free",
    "only going down",
    "in review hell",
    "in writing hell",
    "stuck writing a proof",
    "avoiding reviewer #2",
    "fueled by monster and citations",
    "fighting with LaTeX",
    "revising and resubmitting... forever",
    "questioning his life choices",
    "computationally indistinguishable from a lunatic",
    "hashing it out",
    "leaking memory",
    "trying to see inside the black box",
    "probably fine",
];

export function onRequestGet(context) {
    return new Response("is " + is[Math.floor(Math.random() * is.length)], {
        headers: {
            "Content-Type": "text/plain",
        },
    });
}
