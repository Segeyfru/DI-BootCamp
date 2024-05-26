import { nanoid } from "@reduxjs/toolkit"
import { Todo } from "./type"
interface ListProps<T> {
    items: T[],
    renderItems: (item: T) => React.ReactNode
}
const List = <T extends unknown>({ items, renderItems }: ListProps<T>) => {
    return (
        <ul>
            {
                items.map((item) => (
                    <li key={nanoid()}> {renderItems(item)}</li>
                ))
            }
        </ul>
    )
}
export default List 