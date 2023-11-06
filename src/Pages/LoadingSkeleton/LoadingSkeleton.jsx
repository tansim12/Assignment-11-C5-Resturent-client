import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingSkeleton = () => {
  return (
    <div className="h-screen bg-dark text-white">
      {" "}
      {/* Set the container to full-screen height and dark background */}
      <SkeletonTheme color="#3c3c3c" highlightColor="#4c4c4c">
        {" "}
        {/* Set custom background and highlight colors */}
        <div className="bg-dark p-4 sm:p-8 sm:h-screen rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none">
          <Skeleton
            className="h-64 sm:h-full sm:w-72 rounded-xl bg-gray-600 animate-pulse"
            height={50}
            width={50}
          />
          <div className="flex flex-col flex-1 gap-5 sm:p-4">
            <div className="flex flex-1 flex-col gap-4">
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-14 rounded-2xl"
                height={14}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-14 rounded-2xl"
                height={14}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-14 rounded-2xl"
                height={14}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
              <Skeleton
                className="bg-gray-600 w-full animate-pulse h-40 rounded-2xl"
                height={4}
              />
            </div>
            <div className="mt-auto flex gap-4">
              <Skeleton
                className="bg-gray-600 w-24 h-8 animate-pulse rounded-full"
                width={24}
                height={8}
              />
              <Skeleton
                className="bg-gray-600 w-24 h-8 animate-pulse rounded-full"
                width={24}
                height={8}
              />
              <Skeleton
                className="bg-gray-600 w-24 h-8 animate-pulse rounded-full ml-auto"
                width={24}
                height={8}
              />
            </div>
          </div>
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default LoadingSkeleton;
