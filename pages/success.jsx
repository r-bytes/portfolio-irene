import { Button } from "@components/index"

const succes = () => {
    return (
        <div className="h-full flex flex-col justify-center items-center gap-6">
            <h2 className="text-lg text-center mt-16">
                Bedankt voor je email, je krijgt zo snel mogelijk een reactie.
            </h2>
            <Button primary text={"Terug"} href={"/"} />
        </div>
    )
}
export default succes