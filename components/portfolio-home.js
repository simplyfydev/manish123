import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SectionTitle from "./section-title";
import PortfolioCard from "@/components/portfolio-card";
import { PortfolioHomeData, PortfolioData } from "@/data";

const PortfolioHome = () => {
  const { sectionContent } = PortfolioHomeData;
  return (
    <section className="commonSection porfolio">
      <Container>
        <Row>
          <Col lg={12} className="text-center">
            <SectionTitle data={sectionContent} />
          </Col>
        </Row>
        <Row id="Grid">
          <div className="custom">
            <div className="responsive-grid">
              {PortfolioData.map((post, index) => (
                <div key={index}>
                  <PortfolioCard data={post} />
                </div>
              ))}
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default PortfolioHome;
