import "./Loading.css";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => (
  <>
    <div className="loader skeleton">
      <Skeleton />
    </div>
    <div className="loader skeleton">
      <Skeleton />
    </div>
    <div className="loader skeleton">
      <Skeleton />
    </div>
    <div className="loader skeleton">
      <Skeleton />
    </div>
  </>
);

export default Loading;
