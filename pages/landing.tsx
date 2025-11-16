import Card from "@/components/Card"
import Button from "@/components/Button" // Import the new Button

const Landing: React.FC = () => {
  return (
    <div className="p-10"> {/* Added padding to see components better */}
      <h1 className=" text-xl font-extralight mb-4">Landing Page</h1>

      {/* From Task 4 */}
      <div className="flex flex-wrap gap-4 mb-8">
        <Card />
      </div>

      {/* From Task 6 */}
      <h2 className="text-lg font-semibold mb-2">Button Component Examples</h2>
      <div className="flex items-center flex-wrap gap-4">
        {/* Sizes */}
        <Button title="Small Button" styles="bg-blue-500 text-sm rounded-md" />
        <Button title="Medium Button" styles="bg-blue-600 text-base rounded-md" />
        <Button title="Large Button" styles="bg-blue-700 text-lg rounded-md" />

        {/* Shapes */}
        <Button title="Rounded-sm" styles="bg-green-500 rounded-sm" />
        <Button title="Rounded-md" styles="bg-green-600 rounded-md" />
        <Button title="Rounded-full" styles="bg-green-700 rounded-full" />
      </div>
    </div>
  )
}
export default Landing