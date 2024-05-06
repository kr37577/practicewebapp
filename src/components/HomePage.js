import React from 'react';
import { Button } from 'react-bootstrap';
import reactImage from "../Images/react.png";
import jsImage from "../Images/js.png";
import nodejsImage from "../Images/nodejs.png";
import profileImage from "../Images/character_boy_normal.png";

const HomePage = () => {
  return (
    <div>
            <div className="container text-center">
      <h1>MY PORTFOLIO</h1>

      <img src={profileImage} className="profileImage" />

      <p>
        このサイトは勉強のために作成したポートフォリオサイトです。
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              作る予定
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">プログラミング勉強サイト</h4>
              <p class="text-muted">
                ログイン可能で、プログラミングの勉強ができるサイトを作成します。
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">レスポンシブサイト</h4>
              <p class="text-muted">
                
              </p>
            </div>
            <div class="col-md-4">
              {/* <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={nodejsImage} />
              <h4>node.js</h4>
              <p>node.jsが使えます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
            <h1 class="title">略歴</h1>
            <div class="footermae">
            <p>2020年4月 〜 2024年3月: 新潟大学</p>
            <p>2024年4月 〜 : 奈良先端科学技術大学院大学</p>
            </div>
        </div>
      </section>
    </div>
       
       
    </div>
  )
}

export default HomePage