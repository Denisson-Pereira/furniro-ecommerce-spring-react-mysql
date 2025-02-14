import { BrowseView } from "./BrowseView";
import { useBrowseModel } from "./useBrowseModel";

export const Browse = () => {
    const browserModel = useBrowseModel();
    return (
        <>
            <BrowseView {...browserModel} />
        </>
    )
}