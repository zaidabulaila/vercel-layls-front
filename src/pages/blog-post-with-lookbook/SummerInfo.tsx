import React from "react";
import gallery1 from '@assets/images/portfolio/gallery-full-size-01.jpg'
import gallery2 from '@assets/images/portfolio/gallery-02.jpg'
import gallery3 from '@assets/images/portfolio/gallery-03.jpg'
import gallery4 from '@assets/images/portfolio/gallery-04.jpg'
import gallery5 from '@assets/images/portfolio/gallery-05.jpg'
import gallery6 from '@assets/images/portfolio/gallery-06.jpg'
import Image from "next/image";
import Link from "next/link";
import { Col, Row } from "react-bootstrap";

const SummerInfo = () => {
    return (
        <React.Fragment>
            <div className="mt-4 text-muted pt-3">
                <p>
                    Typography is the work of <span className="ection-subtitle sub-title font-secondary fst-italic">typesetters, compositors,
                        typographers, graphic
                        designers, art directors, manga artists, comic book artists, graffiti artists,</span> and
                    now—anyone
                    who arranges words, letters, numbers, and symbols for publication, display, or distribution—from
                    clerical <b className="fw-semibold">workers and newsletter writers to anyone self-publishing
                        materials.</b>
                </p>

                <Row className="row-cols-2 row-cols-md-3 g-2">
                    <Col>
                        <Link href="/shop" className="db">
                            <Image src={gallery1} className="img-fluid h-100" alt="" priority/>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/shop" className="db">
                            <Image src={gallery2} className="img-fluid h-100" alt="" priority/>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/shop" className="db">
                            <Image src={gallery3} className="img-fluid h-100" alt="" priority/>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/shop" className="db">
                            <Image src={gallery4} className="img-fluid h-100" alt="" priority/>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/shop" className="db">
                            <Image src={gallery5} className="img-fluid h-100" alt="" priority/>
                        </Link>
                    </Col>
                    <Col>
                        <Link href="/shop" className="db">
                            <Image src={gallery6} className="img-fluid h-100" alt="" priority/>
                        </Link>
                    </Col>
                </Row>
                <p className="sub-title font-secondary lookbook-contain my-3 fst-italic px-5 position-relative gray-light mt-4 p-30">
                    Sed utgio perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                </p>
            </div>
        </React.Fragment>
    )
}
export default SummerInfo