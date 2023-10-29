import { twMerge } from "tailwind-merge";
import { CrocType } from "../store/slices/crocSlice";
import { FishType } from "../store/slices/fishSlice";
import { PokeType } from "../store/slices/pokeSlice";

type PropTypes = {
  aqua: FishType | CrocType | PokeType;
  handleRemoveAqua: (id: string) => void;
  isPoke?: boolean;
};

const AquaItem = ({ aqua, handleRemoveAqua, isPoke }: PropTypes) => {
  const { id, name, image } = aqua;
  /**
   * TS ERROR: Property 'pokeId' does not exist
   * on type 'FishType | CrocType | PokeType'.
   *
   * To avoid this error, use the 'in' keyword to check if the property exists.
   */
  const pokeId = "pokeId" in aqua && aqua.pokeId;

  return (
    <div
      className={twMerge(
        "border-b-2 border-dashed border-black",
        "flex items-center gap-2 max-w-xs"
      )}
    >
      <div className="flex-1">
        <p className="font-mono">
          {id} {isPoke && `[${pokeId}]`}
        </p>
        <p className="capitalize">{name}</p>
      </div>

      <div className="w-20 h-20">
        <img
          className={twMerge(
            "w-full h-full object-cover",
            isPoke && "object-contain"
          )}
          src={image}
          alt={name}
        />
      </div>

      <button
        onClick={() => handleRemoveAqua(id)}
        className="btn btn-secondary btn-square"
      >
        X
      </button>
    </div>
  );
};

export default AquaItem;
