'use client'
import { FC, useState } from "react"

const Page: FC = () => {
    const [urls, setUrls] = useState([''])
    return <>
        {
            urls.map((url, index) => (
                <input
                    key={index}
                    type='text'
                    value={url}
                    onChange={e => setUrls(urls => urls.map((u, i) => i === index ? e.target.value : u))}
                />
            ))}
        <button onClick={() => setUrls(urls => [...urls, ''])}>
            Add Option
        </button>
        <p> {import.meta.url}/?options={urls.map(x => encodeURIComponent(x)).join(',')} </p>
    </>


}
export default Page;