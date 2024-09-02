import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

type LoadingProps = {
  loading: boolean;
};

const Loading = ({ loading }: LoadingProps) => {
  return (
    <ClipLoader
      color="rgb(59, 130, 246)"
      loading={loading}
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
    />
  );
};

export default Loading;
