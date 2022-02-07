export default function IconSwitch({icon, onSwitch}) {
    return (
            <div onClick = {() => onSwitch(icon)} className = "icon">
            {icon}
            </div>
    )
}