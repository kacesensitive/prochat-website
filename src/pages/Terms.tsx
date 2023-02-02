import React from "react";
import { Divider } from "antd";
import "./Terms.css";

const Terms = () => {
  return (
    <div className="policy-container">
      <div style={{ minHeight: "150px" }} />
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1>Terms of Service</h1>
        <Divider style={{ backgroundColor: "rgb(0, 234, 255)" }} />
        <h2>ProChat App License Terms</h2>
        <div style={{ textAlign: "left" }}>
          <li>
            A license allows you to use the ProChat application without the
            apperance of the ProChat logo
          </li>
          <li>
            A license is good indefinitely for the current version of the
            application plus all versions thereafter
          </li>
        </div>
        <h2>Website Terms</h2>
        <div>
          <ol>Terms</ol>
          <text>
            By accessing the website at https://prochat.com, you are agreeing to
            be bound by these terms of service, all applicable laws and
            regulations, and agree that you are responsible for compliance with
            any applicable local laws. If you do not agree with any of these
            terms, you are prohibited from using or accessing this site. The
            materials contained in this website are protected by applicable
            copyright and trademark law.
          </text>
          <ol>Disclaimer</ol>
          <text>
            The materials on KaceyDev Ltd.'s website are provided on an 'as is'
            basis. KaceyDev Ltd. makes no warranties, expressed or implied, and
            hereby disclaims and negates all other warranties including, without
            limitation, implied warranties or conditions of merchantability,
            fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights. Further,
            KaceyDev Ltd. does not warrant or make any representations
            concerning the accuracy, likely results, or reliability of the use
            of the materials on its website or otherwise relating to such
            materials or on any sites linked to this site.
          </text>
          <ol>Limitations</ol>
          <text>
            In no event shall KaceyDev Ltd. or its suppliers be liable for any
            damages (including, without limitation, damages for loss of data or
            profit, or due to business interruption) arising out of the use or
            inability to use the materials on KaceyDev Ltd.'s website, even if
            KaceyDev Ltd. or a KaceyDev Ltd. authorized representative has been
            notified orally or in writing of the possibility of such damage.
            Because some jurisdictions do not allow limitations on implied
            warranties, or limitations of liability for consequential or
            incidental damages, these limitations may not apply to you.
          </text>
          <ol>Accuracy of materials</ol>
          <text>
            The materials appearing on KaceyDev Ltd.'s website could include
            technical, typographical, or photographic errors. KaceyDev Ltd. does
            not warrant that any of the materials on its website are accurate,
            complete or current. KaceyDev Ltd. may make changes to the materials
            contained on its website at any time without notice. However
            KaceyDev Inc does not make any commitment to update the materials.
          </text>
          <ol>Links</ol>
          <text>
            KaceyDev Ltd. has not reviewed all of the sites linked to its
            website and is not responsible for the contents of any such linked
            site. The inclusion of any link does not imply endorsement by
            KaceyDev Ltd. of the site. Use of any such linked website is at the
            user's own risk.
          </text>
          <ol>Modifications</ol>
          <text>
            KaceyDev Ltd. may revise these terms of service for its website at
            any time without notice. By using this website you are agreeing to
            be bound by the then current version of these terms of service.
          </text>
        </div>
      </div>
    </div>
  );
};

export default Terms;
