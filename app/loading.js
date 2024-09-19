import Spinner from "./_components/Spinner";

export default function Loading() {
    return (
        <div className="fixed z-30 top-1/3 left-1/2">
            <Spinner></Spinner>
        </div>
    )
}