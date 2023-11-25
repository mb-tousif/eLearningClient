import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="flex justify-center h-3/4">
      <div className="mx-auto my-auto">
        <InfinitySpin
          height="150"
          width="200"
          color="#023c6c"
          ariaLabel="bars-loading"
          visible={true}
        />
      </div>
    </div>
  );
}
