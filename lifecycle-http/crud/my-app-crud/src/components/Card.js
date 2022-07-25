import '../css/App.css'

export default function Card({content}) {
    return (
    <div className="card">
       <div className='content'>{content}</div> 
       </div>
    )
}