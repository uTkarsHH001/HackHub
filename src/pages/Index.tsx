import LabelledInput from "../components/LabelledInput"
import icon from '../assets/icons/bxs_cloud-upload.svg'
const Index : React.FC = () => {
    
    return(
        <div className="w-full h-full text-sm overflow-hidden">
            <p className="bg-gray-100 py-4 px-12">Challenge Details</p>

            <form action="" className="px-12 py-2 flex flex-col">
                
                <LabelledInput
                    label="Challenge Name"
                    name="challengeName"
                    type="text"
                />
                <LabelledInput
                    label="Start Date"
                    name="startDate"
                    type="date"
                    placeholder="Start Date"
                />
                <LabelledInput
                    label="End Date"
                    name="endDate"
                    type="date"
                    placeholder="End Date"
                />
                <label htmlFor="">
                    Description
                    <textarea className="my-2 border block w-2/5" rows={6} name="" id=""></textarea>
                </label>
                <label className="my-2 border w-1/5 font-medium text-gray-500 text-center p-2 flex justify-center items-center">
                    Upload &nbsp; <img src={icon} alt="" />
                    <input type="file" className="hidden" />
                </label>

                <label>
                    Level
                    <select className="my-2 w-1/5 p-1 border-2 rounded-md block text-xs">
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                
                <button className="my-2 border p-1 rounded-md w-2/12 bg-[#44924C] text-white" type="submit">Create Challenge</button>
            </form>

        </div>
    )
}

export default Index