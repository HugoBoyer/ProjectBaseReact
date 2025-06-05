import { Checkbox } from "../../form/Checkbox";
import { Input } from "../../form/Input";
import { InputRange } from "../../form/InputRange";

export function SearchBar({showStockedOnly, onStockedOnlyChange, search, onSearchChange,rangeBar,onRangeBar}) {
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <Input 
              value={search} 
              onChange={onSearchChange} 
              placeholder="Rechercher" 
          />
          <Checkbox 
            id="stocked"
            checked={showStockedOnly}
            onChange={onStockedOnlyChange}
            label="N'afficher que les produits en stodck"
          />
          <InputRange
            onChange={onRangeBar}
            value={rangeBar} 
          />
        </div>
      </div>
    )
  }