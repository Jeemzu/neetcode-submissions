type node = {
    next?: node;
    value?: number;
}

class LinkedList {
    private collection: node[];
    constructor() {
        this.collection = [];
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index: number): number {
        if (this.collection.length <= index) return -1;

        return this.collection[index].value;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val: number): void {
        this.collection.unshift({next: this.collection[0], value: val});
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val: number): void {
        this.collection.push({next: null, value: val});
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index: number): boolean {
        if(this.collection.length <= index) return false;

        if(this.collection.length === 1) {
            this.collection.pop();
            return true;
        }

        const removedNode = this.collection.splice(index, 1);

        if(this.collection.length > 1) {
            this.collection[index].next = removedNode[0].next;
        }
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues(): number[] {
        const values: number[] = [];
        for(let i = 0; i < this.collection.length; i++){
            values.push(this.collection[i].value);
        }

        return values;
    }
}
