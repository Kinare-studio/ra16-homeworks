export default function IconSwitch({icon, onSwitch}) {
    return (
            <div onClick = {onSwitch} className = "icon">
            {icon}
            </div>
    )
}