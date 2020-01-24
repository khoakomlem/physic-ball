function Sprite() {

    this.img = null;
    this.imgLink = 'img/ball.png';

    this.blood = [];
    this.bloodImg = null;
    this.bloodLink = 'img/blood.png';
    this.x = 0;
    this.y = 0;
    this.s = 0;
    this.size = 80;
    this.accX = 0.02; //acceleration X
    this.accY = this.accX * 25; //acceleration Y
    this.accS = this.accX / 50; //acceleration scroll
    this.speedX = 0; // speed X
    this.speedY = 0; // speed Y
    this.speedS = 0; // speed scroll
    this.dropping = false;

    this.addBlood = function() {
        this.blood.push({ x: this.x, y: this.y, frame: 255 });
    }
    this.updateBlood = function() {
        for (var i in this.blood) {
            if (this.blood[i].frame > 0) {
                this.blood[i].frame -= 5;
                if (this.blood[i].frame <= 0)
                    this.blood.splice(i, 1);
            }
        }
    }
    this.drawBlood = function() {
        for (var i in this.blood) {
            tint(255, this.blood[i].frame);
            image(this.bloodImg, this.blood[i].x, this.blood[i].y);
            noTint();
        }
    }

    this.draw = function() {
        push();
        translate(this.x, this.y);
        rotate(this.s);
        image(this.img, 0, 0, this.size, this.size);
        pop();
        // this.updateBlood();
        // this.drawBlood();
    }

    this.update = function() {

        if (this.dropping) {
            return;
        }

        // for (var i in terrain.arr) {
        // 	// if (abs(t))
        // 	if (abs(this.speedX*25) < abs(this.speedY))
        //     if (this.y - this.size / 2 < terrain.arr[i].y + terrain.arr[i].h && this.y + this.size / 2 > terrain.arr[i].y) {
        //         if (this.x - this.size / 2 < terrain.arr[i].x + terrain.arr[i].w && this.x + this.size / 2 > terrain.arr[i].x) {
        //             if (this.speedY > 0)
        //                 this.y = terrain.arr[i].y - this.size / 2;
        //             if (this.speedY < 0)
        //                 this.y = terrain.arr[i].y + terrain.arr[i].h + this.size / 2;
        //             this.speedS = -this.speedS / 2;
        //             this.speedY = -this.speedY / 2;
        //             continue;
        //         }
        //     }
        // 	if (abs(this.speedX*25) > abs(this.speedY))
        //     if (this.x - this.size / 2 < terrain.arr[i].x + terrain.arr[i].w && this.x + this.size / 2 > terrain.arr[i].x) {
        //         if (this.y + this.size / 2 > terrain.arr[i].y && this.y - this.size / 2 < terrain.arr[i].y + terrain.arr[i].h) {
        //             if (this.speedX > 0)
        //                 this.x = terrain.arr[i].x - this.size / 2;
        //             if (this.speedX < 0)
        //                 this.x = terrain.arr[i].x + terrain.arr[i].w + this.size / 2;
        //             this.speedS = -this.speedS / 2;
        //             this.speedX = -this.speedX / 2;
        //             continue;
        //         }
        //     }
        // }


    if (this.speedX < 0) {
        this.speedX += this.accX;
        if (this.speedX > 0)
            this.speedX = 0;
    }
    if (this.speedX > 0) {
        this.speedX -= this.accX;
        if (this.speedX < 0)
            this.speedX = 0;
    }
    this.speedY += this.accY;
    if (this.speedS > 0) {
        this.speedS -= this.accS;
        if (this.speedS < 0)
            this.speedS = 0;
    }
    // else
    if (this.speedS < 0) {
        this.speedS += this.accS;
        if (this.speedS > 0)
            this.speedS = 0;
    }


    this.x += this.speedX;
    this.y += this.speedY;
    this.s += this.speedS;

    let tile = 2/3;

    if (this.y - this.size / 2 < 0) {
        this.speedY = -this.speedY * tile;
        this.y = this.size / 2;
        if (abs(this.speedY) > 10)
            this.addBlood();
    }

    if (this.y + this.size / 2 > height) {
        this.speedY = -this.speedY * tile;
        this.y = height - this.size / 2;
        if (abs(this.speedY) > 10)
            this.addBlood();
    }

    if (this.x - this.size / 2 < 0) {
        this.speedS = -this.speedS * tile;
        this.speedX = -this.speedX * tile;
        this.x = this.size / 2;
        if (abs(this.speedX) > 10)
            this.addBlood();
    }

    if (this.x + this.size / 2 > width) {
        this.speedS = -this.speedS * tile;
        this.speedX = -this.speedX * tile;
        this.x = width - this.size / 2;
        if (abs(this.speedX) > 10)
            this.addBlood();
    }
}

this.drop = function(x, y) {
    this.x = lerp(this.x, x, 0.1);
    this.y = lerp(this.y, y, 0.1);
    this.speedX = (winMouseX - pwinMouseX) * 1;
    // console.log(this.speedX);
    this.speedY = (winMouseY - pwinMouseY) * 1;
    this.speedS = (winMouseX - pwinMouseX) / 50;
}
}