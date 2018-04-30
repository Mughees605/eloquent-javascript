import { roadGraph } from './BUILDING_GRAPH.js'

class VillageState{
    constructor(place, parcels){
        this.place = place;
        this.parcels = parcels;
    }

    move(destination){
      // check whether there is a road going to this destination
      if(!roadGraph[this.place].includes(destination)){
        return this
      }
    }
}