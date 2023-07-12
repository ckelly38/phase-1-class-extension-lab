// Your code here
class Polygon{
    constructor(sdsarr)
    {
        this.countSides = sdsarr;
    }

    get countSides()
    {
        //console.log("getter this.sides = " + this.sides);
        if (this.sides == undefined || this.sides == null || this.sides.length < 1) return 0;
        else return this.sides.length;
    }
    set countSides(sdsarr)
    {
        this.sides = sdsarr;

        //console.log("this.sides = " + this.sides);
        if (this.sides == undefined || this.sides == null || this.sides.length < 1);
        else
        {
            for (let n = 0; n < this.sides.length; n++)
            {
                if (this.sides[n] > 0);
                else throw "illegal negative side length found and used here!";
            }
        }
    }

    get perimeter(){
        if (this.countSides < 0) throw "illegal number of sides found and used here!";
        else
        {
            let perim = 0;
            for (let n = 0; n < this.countSides; n++)
            {
                if (this.sides[n] > 0) perim += this.sides[n];
                else throw "illegal negative side length found and used here!";
            }
            return perim;
        }
    }
}

class Triangle extends Polygon{
    constructor(sdsarr)
    {
        super(sdsarr);
        this.isValid;
    }

    get isValid()
    {
        if (this.countSides == 3)
        {
            //the sum of any two sides of the triangle are greater than the third
            for (let n = 0; n < 3; n++)
            {
                for (let k = 0; k < 3; k++)
                {
                    if (k == n) continue;
                    //else;//do nothing

                    let r = -1;
                    if (n == 0)
                    {
                        if (k == 1) r = 2;
                        else r = 1;
                    }
                    else if (n == 1)
                    {
                        if (k == 0) r = 2;
                        else r = 0;
                    }
                    else
                    {
                        //n == 2
                        if (k == 0) r = 1;
                        else r = 0;
                    }

                    let sidea = this.sides[n];
                    let sideb = this.sides[k];
                    let oside = this.sides[r];
                    if (sidea + sideb > oside);
                    else
                    {
                        //console.error("the sum of any two sides must be greater than the third, but " +
                        //    "that was not true!");
                        return false;
                    }
                }
            }
            return true;
        }
        else
        {
            //console.error("illegal number of sides for the triangle!");
            return false;
        }
    }
}

class Square extends Polygon{
    constructor(sdsarr)
    {
        super(sdsarr);
        this.isValid;
    }

    get isValid(){
        if (this.countSides == 4)
        {
            let myval = this.sides[0];
            for (let n = 0; n < 4; n++)
            {
                if (this.sides[n] == myval);
                else
                {
                    //console.error("a square must have all 4 sides be the same length!");
                    return false;
                }
            }
            return true;
        }
        else
        {
            //console.error("illegal number of sides for the square!");
            return false;
        }
    }
    get area(){
        if (this.isValid) return this.sides[0] * this.sides[0];
        else return -1;
    }
}
