class DynamicArray {
    private capacity: number;
    private length: number;
    private collection: number[];

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity: number) {
        this.capacity = capacity;
        this.length = 0;
        this.collection = new Array(capacity);
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i: number): number {
        return this.collection[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i: number, n: number): void {
        this.collection[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n: number): void {
        if (this.length === this.capacity) this.resize();
        
        this.collection[this.length] = n;
        this.length++;
    }

    /**
     * @returns {number}
     */
    popback(): number {
        this.length--;
        return this.collection[this.length];
    }

    /**
     * @returns {void}
     */
    resize(): void {
        this.capacity *= 2;
        const newCollection = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newCollection[i] = this.collection[i];
        }
        this.collection = newCollection;
    }

    /**
     * @returns {number}
     */
    getSize(): number {
        return this.length;
    }

    /**
     * @returns {number}
     */
    getCapacity(): number {
        return this.capacity;
    }
}
