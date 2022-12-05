import { useEffect } from "react"

const Usetitle = title => {
    useEffect(() => {
        document.title = `${title} / Dragon-news`
    }, [title])
}
export default Usetitle;