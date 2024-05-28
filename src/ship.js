class ship{
    #length;
    #hitFrequency;
    #sunk;

    set length(length){
        this.#length=length;


    }
    set hitFrequency(hitFrequency){

        this.#hitFrequency=hitFrequency;
    }
    set sunk(sunk){
        this.#sunk=sunk
        
    }

    get length(){
        return this.#length;
    }
    get hitFrequency(){
        return this.#hitFrequency;
    }
    get sunk(){
        return this.#sunk;
    }

}