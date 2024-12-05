import { ArrowUpRight } from "lucide-react";

const SubmitBtn = ({ loading }: { loading: boolean }) => {
  return (
    <button
      type="submit"
      className="ps-slim group pl-2 mr-1 flex h-[40px] w-[97px] cursor-pointer items-center justify-center gap-1 rounded-full bg-[#111928] text-sm text-white"
    >
      {loading ? (
        <div className="flex items-center gap-1">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <p>Submit</p>
          <div className="relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-white">
            <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
              <ArrowUpRight className="h-4 w-4" />
              <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
            </div>
          </div>
        </>
      )}
    </button>
  );
};

export default SubmitBtn;
