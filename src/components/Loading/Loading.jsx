import "./Loading.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => (
  <>
    <div className="loader">
      <Skeleton />
    </div>
    <div className="loader">
      <Skeleton />
    </div>
    <div className="loader">
      <Skeleton />
    </div>
    <div className="loader">
      <Skeleton />
    </div>
  </>
);

export default Loading;
