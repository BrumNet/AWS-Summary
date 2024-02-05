var awsGlobalInfra, caf, waf, sysops, support

awsGlobalInfra = [
"AWS Availability zones are a group of data centers designed to be fault tolerant." , 

"AWS Regions is just a group of availability zones with proximity. (Chosen based on compliance requirements or to reduce latency. Some AWS Services can be region specific.)" ,

"PoP (imagine like cell towers for ISP’s) are edge locations and regional edge caches (access infrequent data) where end users access AWS services through either the Amazon CloudFront (CDN) or the Amazon Route 53 services (DNS) primarily to reduce latency.", 

"AWS Global Infrastructure is designed to be elastic/scalable(multi-regions), fault tolerant (availability zones) and highly available (PoP).", 

"AWS Shared responsibility emulates that Amazon is responsible for the security of the cloud, while the user is responsible for the security in the cloud depending on the cloud service model used (Iaas, Paas, Saas)."  ]

caf = [
	"6 perspective: Business, Governance, People, Platform, Operations, Security"]

waf = [
	"architectural best practices for designing and running workloads in the AWS Cloud): operational excellence, security, reliability, performance efficiency, cost optimization, and sustainability.",  
	"CAF's technical aspect",
	"Well-Architected design principles" ,
	"Stop guessing your capacity needs. ",

	"Test systems at the production scale. ",

	"Automate to make architectural experimentation easier.  ",

	"Provide for evolutionary architectures. (plan for future evolve) ",

	"Drive architectures by using data. (form arch. Based on data) " ,

	"Improve through game (fault simulation) days. "]

sysops = [
	"Systems operations (SysOps) automating deployment, administration, and monitoring of systems and network resources with scripts, programs, or templates." ,

	"Tasks required to build (create), test, deploy, monitor, maintain, and safeguard complex computing systems." ,

	"yaml, json, templates: CloudFormation, OpsWork, Ansible, Terraform, Chef, Puppet "]

support = [
	"AWS account teams serve as a first point of contact to help guide you through your deployment and implementation. These teams point you toward the right resources to resolve security issues that you might encounter. ",

	"AWS support plans. Basic –Customer service and communities –AWS Trusted Advisor –AWS Persona Health Dashboard",

	"•three tiers of support:–AWS Developer Support plan –AWS Business Support plan –AWS Enterprise Support plan ",

	"The AWS Partner Network (APN) is a group of cloud software and service vendors who can assist customers with their security and compliance needs.", 	  

	"AWS advisories and bulletins: documents provide information on current vulnerabilities and threats"]

var infraAndDeploy = [
	["AWS Global Infrastracture", awsGlobalInfra],
	["AWS Cloud Adoption Framework (Cloud Organizational Dpmts)", caf]
	["AWS Well Architecture Framework", waf]]