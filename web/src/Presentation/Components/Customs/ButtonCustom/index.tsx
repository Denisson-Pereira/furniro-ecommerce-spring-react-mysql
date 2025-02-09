import './buttonCustom.styles.sass'

export const ButtonCustom = ({ text, sizeText, type }: { text: string, sizeText: number, type: "button" | "submit" }) => {
  return (
    <div className="buttonCustom_container">
      <button 
        style={{ fontSize: sizeText }}
        type={type}
      >
        {text}
      </button>
    </div>
  )
}
