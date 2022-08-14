import Video from "./Video";

export default function VideoList({ list }) {
    return list.map(item => <Video url={item.url} date={item.date} key={item.url} />);
}