import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import CoderapperIcon from "../icons/coderapper.svg";

const IndexPage = () => (
	<Layout>
		<Seo title="Home" />
		<div>
			<CoderapperIcon />
		</div>
	</Layout>
);

export default IndexPage;
