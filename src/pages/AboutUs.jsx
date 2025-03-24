import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function AboutUs() {
  return (
    <div>
      <Breadcrumb title="About Us" />
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.shutterstock.com/image-photo/two-happy-busy-middle-aged-600nw-2479065515.jpg"
            alt="About Us"
          />
        </div>
        <div className="col-6">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            aspernatur iste, autem numquam laboriosam ratione dolores est a
            earum totam quia illum corrupti accusamus maiores, amet aperiam
            consequatur impedit expedita modi id fuga fugiat. Provident possimus
            accusantium ratione saepe fuga neque ipsum? Ipsum temporibus velit
            odio accusantium deserunt, error excepturi possimus ducimus
            voluptatem magni cum distinctio. Nobis ea est quidem culpa dicta
            sint eaque ut, quibusdam optio non deleniti quaerat minus aut.
            <br />
            <br />
            Distinctio doloribus voluptate harum fugit cupiditate unde
            voluptatem suscipit hic earum dolorum voluptatum culpa natus
            consectetur laborum magni, commodi tempora amet praesentium ducimus
            veritatis velit ad. Voluptatum, sunt!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
