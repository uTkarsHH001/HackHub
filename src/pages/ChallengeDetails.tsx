    import { CiClock2 } from "react-icons/ci";
    import { IoBarChartOutline } from "react-icons/io5";
    import { useLocation, useNavigate } from "react-router-dom";
    import { useHackathon } from "../context/HackathonContext";

    const ChallengeDetails: React.FC = () => {

        const location = useLocation();
        const navigate = useNavigate()
        const { id, title, startDate, description, level } = location.state as {
            id: string,
            title: string,
            startDate: Date,
            description: string,
            level: string,
            onClick: () => void
        }
        const { deleteHackathon } = useHackathon()
        const handleDelete = (id: string) => {
            deleteHackathon(id);
            navigate('/challengelist')
        };
        return(
            <div className="h-screen w-screen">
                <div className="bg-[#003145] w-screen h-3/6 p-24">
                    <p className="bg-[#FFCE5C] w-fit py-1 px-3 font-medium rounded-lg flex gap-2 items-center text-sm my-4"> <CiClock2 />{`${startDate}`}</p>
                    <p className="font-bold text-white text-3xl my-4">{title}</p>
                    <p className="text-white font-thick my-4">{description.substring(0, 50)}</p>
                    <p className="w-fit text-sm py-1 px-2 rounded-lg bg-white text-[#003145] font-semibold flex gap-1 items-center"> <IoBarChartOutline /> {level}</p>
                </div>
                <div className="h-12 border px-24">
                    <div className="h-full flex items-end justify-between">
                        <p className="w-fit border-b-2 border-[#44924C] ">Overview</p>
                        <div className="self-center">
                            <button onClick={() => navigate(`/edit/${id}`)} className="bg-[#44924C] py-1 px-4 rounded-lg text-white font-semibold mx-2">Edit</button>
                            <button onClick={() => handleDelete(id)} className="py-1 px-4 rounded-lg text-red-600 border border-red-600 mx-2">Delete</button>
                        </div>
                    </div>
                    <p className="my-8 w-3/4">{description}</p>
                </div>
            </div>
        )
    }

    export default ChallengeDetails