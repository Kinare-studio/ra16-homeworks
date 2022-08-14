import DateTimePretty from "./DateTimePretty";


export default function Video({ url, date }) {
    return (
        <div className="video">
            <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen title="video" ></iframe>
            <DateTimePretty date={date} />
        </div>
    )
}
