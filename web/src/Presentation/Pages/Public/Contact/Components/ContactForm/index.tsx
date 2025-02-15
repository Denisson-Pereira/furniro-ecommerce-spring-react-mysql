import { ContactFormView } from "./ContactFormView"
import { useContactFormModel } from "./useContactFormModel"

export const ContactForm = () => {
    const contactFormModel = useContactFormModel()
    return(
        <>
            <ContactFormView {...contactFormModel} />
        </>
    )
}