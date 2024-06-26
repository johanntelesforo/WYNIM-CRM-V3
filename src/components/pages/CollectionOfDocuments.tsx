import { DocumentData } from '../ui_components/DocumentDataTable'
import Navbar from '../ui/Navbar'
import InserData from '../ui_components/InsertData'

function CollectionOfDocuments() {
    return (
        <div>
            <Navbar />
            <InserData />
            <DocumentData />
        </div>
    )
}

export default CollectionOfDocuments