//import DateTimePretty from "./DateTimePretty";

import DateTime from "./DateTime";


export default function Video({url, date}) {
    return (
        <div className="video">
            <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="video" ></iframe>
            <DateTime date={date} />
        </div>
    )
}
