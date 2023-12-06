import React from 'react';

let p5;
if (typeof window !== 'undefined') {
  p5 = require('p5');
}

class Boids extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  Sketch = (p) => {
    let flock = [];

    p.setup = () => {
      p.createCanvas(700, 410);
      for (let i = 0; i < 100; i++) {
        flock.push(new Boid(p));
      }
    }

    p.draw = () => {
      p.background(51);
      for (let boid of flock) {
        boid.edges();
        boid.flock(flock);
        boid.update();
        boid.show();
      }
    }

    class Boid {
      constructor(p) {
        this.position = p.createVector(p.random(p.width), p.random(p.height));
        this.velocity = p5.Vector.random2D();
        this.velocity.setMag(p.random(2, 4));
        this.acceleration = p.createVector();
        this.maxForce = 0.2;
        this.maxSpeed = 4;
      }

      edges() {
        if (this.position.x > p.width) {
          this.position.x = 0;
        } else if (this.position.x < 0) {
          this.position.x = p.width;
        }
        if (this.position.y > p.height) {
          this.position.y = 0;
        } else if (this.position.y < 0) {
          this.position.y = p.height;
        }
      }

      align(boids) {
        let perceptionRadius = 50;
        let steering = p.createVector();
        let total = 0;
        for (let other of boids) {
          let d = p.dist(this.position.x, this.position.y, other.position.x, other.position.y);
          if (other != this && d < perceptionRadius) {
            steering.add(other.velocity);
            total++;
          }
        }
        if (total > 0) {
          steering.div(total);
          steering.setMag(this.maxSpeed);
          steering.sub(this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
      }
      flock(boids) {
        let separation = this.separation(boids); // vector
        let alignment = this.alignment(boids); // vector
        let cohesion = this.cohesion(boids); // vector
    
        this.acceleration.add(separation);
        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
      }
    
      separation(boids) {
        // calculate a vector that points away from the nearby boids
      }
    
      alignment(boids) {
        // calculate the average velocity of the nearby boids
      }
    
      cohesion(boids) {
        // calculate the average position of the nearby boids
      }

      show(p) {
        
      }

      update() {
        
      }
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.myRef.current);
  }

  render() {
    return (
      <div ref={this.myRef} />
    );
  }
}

export default Boids;