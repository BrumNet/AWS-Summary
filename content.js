//todos: Containers, AMI Building Strategy

var aws = {}

var awsGlobalInfra, caf, waf, sysops, support, launchTemplate

//handles request
var ec2, elasticBeanstalk, ec2autoScaling, elb, lambda, ecs, eks, fargate, lambdaSnapStart, serverlessAppRepo, lightsail, appRunner, batch, simspace, vmware, ec2ImageBuilder, autoScaling

var athena, dataExchange, amazonemr, glue, msk, openSearch, xray, cloudSearch, dataZone, kinesis, quickSight, finspace, cleanRooms, sparkonAthena, lakeFormation

var rds, aurora, redshift, dynamo, dms, qldb, neptune, documentDB, keyspaces, timestream

//setups and configs
var managementConsole, cli, cloudWatch, cloudTrail, awsScaling, trustedAdvisor, config, wellArchitectedFrameworkTool, controlTower,
prometheus, systemManager, cloudFormation, opswork, stepFunction, activate, shell, appconfig, resourceManager,
codeCommit, codeDeploy, CodePipeline, codeBuild //<<<<<<<<<<<<<<<

//resource availability
var vpc, route53, cloudFront, clientVPN, directConnect, transitGateway, apiGateway, localZones, outpost, wavelength, eventbridge, connect, siteToSiteVPN, accelerator, vpcpeering, vpclattice, appMesh, cloudmap, private5G, verifiedAccess

//security
var iam, organisations, cognito, artifact, shield, guardDuty, inspector, cloudhsm, kms, acm, macie, singleSign, workspaces, a_waf, firewallManager, secretManager, securityHub, directoryService, verifiedPermissions, guardDutyECS, resourceAccessManager, detective, securityLake

//cost
var costandusage, budgets, costexplorer, billing

//storage
var s3, ebs, efs, fsx, storageGateway, instanceStore, glacier, snowFamily, transferFamily, dataSync, codeArtefact, ecr, awsBackup, filegateway, volumegateway, ebsSnaps, efsarchive, aws_DisasterRecovery

var todo = [/*

*/]

awsGlobalInfra = [
"AWS Availability zones are a group of data centers designed to be fault tolerant." , 

"AWS Regions is just a group of availability zones with proximity. (Chosen based on compliance requirements or to reduce latency. Some AWS Services can be region specific.)" ,

"PoP (imagine like cell towers for ISP’s) are edge locations and regional edge caches (access infrequent data) where end users access AWS services through either the Amazon CloudFront (CDN) or the Amazon Route 53 services (DNS) primarily to reduce latency.", 

"AWS Global Infrastructure is designed to be elastic/scalable(multi-regions), fault tolerant (availability zones) and highly available (PoP).", 

"AWS Shared responsibility emulates that Amazon is responsible for the security of the cloud, while the user is responsible for the security in the cloud depending on the cloud service model used (Iaas, Paas, Saas)."  ]
caf = [
	"6 perspective: Business, Governance, People, Platform, Operations, Security",

	"-Reduce business risk -Improve environmental, social, and governance performance -Grow revenue -Increase operational efficiency.",

	"-Envision Phase -Align Phase -Launch Phase -Scale Phase"]
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
	"AWS Technical Support covers how to find resources, Best practices, Troubleshooting, Issues, Problems detection",

	"Benefits: Build faster, Mitigate risks, Management resources, Proactively monitor your environment and automate remediation., Get expert help",

	"AWS account teams serve as a first point of contact to help guide you through your deployment and implementation. These teams point you toward the right resources to resolve security issues that you might encounter. ",

	
	"Technologies: –AWS Trusted Advisor –AWS Persona Health Dashboard (Provides alerts and remediation guidance if AWS experiences events that might impact customers.) -AWS Health API (Provides programmatic access to the AWS Health information that is in the Personal Health dashboard). ",

	"Programs: AWS Infrastructure Event Management(IEM) provides guidance for architecture and scaling. They also offer operational support during planned events, such as shopping holidays. - Architectural reviews with AWS solutions architects are included with Enterprise Support.–AWS Well-Architected helps cloud architects build secure, resilient, and efficient infrastructure for their applications and workloads.•Proactive services that are delivered by AWS Support experts are included with Enterprise Support.",
	
	"•three tiers of support:–AWS Developer Support plan –AWS Business Support plan –AWS Enterprise Support plan ",

	"Plan Service Levels: C- critical, U- Urgent, H- High, N- Normal, L- Low",
	
	"AWS support plans.",

	"Basic Support: Resource center access, Service Health dashboard, product FAQs, discussion forums, AWS whitepapers(AWS whitepapers are a collection of technical documents that outline many topics that are relevant to AWS, like architecting best practices, security best practices, cloud computing economics, and serverless architecture.), Persona Health Dashboard and support for health checks",

	"Developer Support (NL): Support for early development on AWS; Business-hours access through email; 1 contact, Unlimited cases ",

	"Business Support (UHNL): Support for customers that run production workloads; 24/7 access through email, chat, and phone; Unlimited contacts, Unlimited cases",

	"Enterprise Support (CUHNL): Support for customers that run business and mission-critical workloads; 24/7 access through email, chat, and phone; Unlimited contacts, Unlimited cases; Technical Account Manager (TAM); Architectural Reviews; Proactive Services (Concierge, ...)",
	
	"The AWS Partner Network (APN) is a group of cloud software and service vendors who can assist customers with their security and compliance needs.", 	  

	"AWS advisories and bulletins: documents provide information on current vulnerabilities and threats"]
launchTemplate = [
	"EC Launch Templates" +

	"Contains configuration information to launch an EC2 instance. Store launch parameters: –Amazon Machine Image (AMI) ID–Instance type–Subnet–Key pair" ,
	"Features: Enable you to preselect EC2 launch options. Supports versioning. (default template => version 1)" ,
	"Benefits:•Streamline and simplify the launch process for Amazon EC2 Auto Scaling, Spot Fleet, Spot Instances, and On-Demand Instances. ",
	"•Reduce the number of steps that are required to create an instance by capturing all launch parameters within one resource. •Make it easier to implement standards and best practices. As a result, you realize the following additional benefits. •Help in managing costs•Improve security•Minimize the risk of deployment errors"]

ec2 = [
"nine key decisions to make when you create an EC2 instance (Launch Instance Wizard) ",

"1 Amazon Machine Images (AMI) => OS to run EC2 instance from. Select from (Quick Start - AWS prebuilt AMIs, My AMIs – AMIs you created, AWS Marketplace - Preconfigured templates from third parties, Community AMIs – possibly risky AMIs shared by others. AMI’s achieve (3R’s) repeatability, reusability recoverability. Components: Block device mapping, Launch permissions, template for root vol. ",

"2 Instance Type – Choose per use case (general-purpose -> (a1, m4, m5, t2, t3), compute-optimized -> (c4, c5), memory-optimized -> (r4, r5, x1, z1), storage-optimized -> (d2, h1, i3), accelerated computing instances -> (f1, g3, g4, p2, p3)), and high performance computing optimized (hpc6a). Choose ec2 names based on family type. (<family name><generation name>.<size> e.g t3.xlarge, c4.large). Network bandwidth dependent on ec2 instance type. ",

 

"3 Network Settings – Choose VPC and subnet(optional) to connect to. When you launch an instance in a default virtual private cloud (VPC), AWS will assign it a public IP address by default, and not if an existing VPC is specified.  "+

"You can control whether your instance receives a public IP address in two ways. First, you can modify the public IP addressing attribute of your subnet. Second, you can also enable or disable the public IP addressing feature during launch (which overrides the subnet's public IP addressing attribute). ",

 

"4 AWS Identity and Access Management (IAM) role (optional) - if EC2 instance interacts with other AWS services attach an appropriate IAM role (to be kept in instance profile).  "+

"You are not restricted to attaching a role only at instance launch. You can also attach a role to an instance that is running/already exists. ",

 

"5 User data script (optional) - Optionally, specify a user data script at instance launch. (to customize the runtime environment of your instance or strategically to reduce the number of custom AMIs that you build and maintain. "+

"The user data script will run with AWS account root user privileges during the final phases of the boot process. It is run by the cloud-init service and EC2Config/EC2Launch utility on linux and windows instances respectively. By default, user data runs once. However, to run it every time on boot, create a Multipurpose Internet Mail Extensions (MIME) multipart file user data script. (uncommon.) ",

 

"6 Specify storage - Storage for guest OS/AMI OS.  "+

"Elastic Block Storage => Think HDD/SSD(EBS) => Stored outside instance, recommended as root storage for OS.  "+

"Specialized attached Amazon EBS minimize input/output (I/O) contention with other services. "+

"EC2 instance store => think RAM-like storage. Physically attached to instance. deleted with instance ",

 

"7 Tags: Attach case sensitive metadata/labels to AWS resources, using key - value(optional) pairs. Tagging is used for filtering, automation, cost allocation, and access control. "+

"To maximize networking and bandwidth performance of your instance type, launch interdependent instances into a cluster placement group and enable enhanced networking. (Elastic Network Adapter (ENA) - 100gbs, Intel 82599 Virtual Function interface - 10gbs) ",

 

"8 Security Groups: "+

"Set of firewall rules that control traffic to the instance existing outside of the instance's guest OS.  " +

"Rules specify the source(IP’s), ports(443) and protocol(User Diagram Protocol, Internet Control Message Protocol - ICMP, etc).  "+

"When you launch an instance in a VPC, you must either create a new security group or use one that already exists in that VPC. After you launch an instance, you can change its security groups.  "+

"By default, a security group includes an outbound rule that allows all outbound traffic.  ",

"9 Key Pairs:   "+

"Create or specify a key pair (AWS public key, Instance private key) to securely access your instance.  "+

"For Windows AMIs, use the private key to obtain the administrator password that you need to log in to your instance.  "+

"Linux AMIs use the private key to use SSH to securely connect to your instance  ",


"Instance Hibernation  ",

"Hibernation stops an instance so that its memory and processes can be restored when you start it again. (Only some instance backed by EBS)  "+

"Use hibernation to quickly restart an instance but that takes a long time to warm up if you stop and start it.  "+

"The hibernation feature is available for On Demand Instances, and only certain Linux and Windows AMIs and certain instance types.   "+

"Hibernation also requires that you encrypt the root EBS volume and have a restriction on the maximum RAM size of the instance.   "+

"The maximum RAM size is 150 GB for Linux and 16 GB for Windows. In addition, you must turn on hibernation when the instance is first launched. You cannot turn on hibernation on an existing instance after it is launched.  ",


"EBS Volume Deletion: "+

"Set volume’s DeleteOnTermination attribute to yes, to delete it when the instance is terminated.  ",

 

"It is a best practice to regard EC2 instances as ephemeral resources that can be built up, torn down, and rebuilt at a moment’s notice.  ",

"Instances must be stopped to scale vertically. When you update the instance type, the new instance type must support the same architecture. (64-bit architecture can only be updated to a different instance type that also has a 64-bit architecture).   ",

"Note that you can change the instance type of an existing instance only if the root device is an EBS volume and the new instance type that you choose is compatible with the instance's current configuration. In this case, you must stop the instance to change its instance type.  ",


"AMI deprecation. =>  "+

"The deprecation date of public AMIs is 2 years from the AMI creation date. No new instances can be run with deprecated AIs from the console unless cli/sdk/api.   "+

"instances launched prior expiration are not affected.  ",

"EC-User best practices  ",

"Protect the default user account (ec2-user on Linux and Administrator on Windows) because it has administrative permissions.  "+

"Create additional accounts for new users to access the instance.  "+

"Create a key pair or use an existing key pair for the new user.   "+

"For a Linux instance, add new user accounts with SSH access to the instance, and do not use password logins.  "+

"For a Windows instance, use Active Directory or AWS Directory Service to tightly and centrally control user and group access.  "+

"Apply security patches regularly  ",

  

"EC2 Instance Connect =>  "+

"Remotely connect to an EC2 instance. "+

"Supports Amazon Linux 2 and Ubuntu instances. "+

"Can be accessed through the AWS Management Console. "+

"Uses IAM policies to control user access to an instance. "+

"Requires opening an SSH port on the instance. ",

  

"Use the instance console screenshot capability to troubleshoot launch or remote connection problems. "+

"Turn on termination protection to protect an instance from accidental termination. "+

"Turn off source and destination check on a network address translation (NAT) instance.", 

 

"Lifecycle of instance states:  ",

"Pending - instance is booted and deployed to a host computer.  "+

"Running - instance is fully booted and ready.  "+

"Rebooting - (Restart the instance) AWS recommends you reboot the instance from CLI, SDK or console instead of guest os.  "+

"Shutting down - deleting an instance.  "+

"Terminated - unrecoverable deleted instance.  "+

"Stopping - Quitting an instance. (only instance backed by EBS).  "+

"Stopped - A quitted instance. (only instance backed by EBS). "+

 

"Pricing Models:  ",

"Per-second billing is available only for On-Demand Instances, Reserved Instances, and Spot Instances that run Amazon Linux or Ubuntu.  "+

"On-Demand: => Unpredictable workloads/short-term spikes. low cost and flexibility.  "+

"Dedicated Host => Dedicated physical servers (host); Optionally specify VM, core, or socket software for your VM; for large-scale, dynamic workloads; Meet compliance and regulatory requirements; Low cost; Highly Sensitive Workloads. "+

"Dedicated Instance => Isolate specific instances for your use case.  "+

"Reserved Instances => reserve dedicated instances for a period (1yr/3yr), Offer predictability, ensures compute capacity is available when needed; Steady-State Workloads.  "+

"Scheduled Reserved Instances => short-term re-occurring reservation of instances. "+

"Spot Instances => use unused instances when bid >= current price (calculated with supply and demand considerations); Time-Insensitive Workloads. ", 

 

"Retrieving MetaData: "+
"Instance metadata is data about a running EC2 instance => instance-id, instance-type, ami-id. public-hostname:" +

"public_ec2_url/latest/meta-data. " +

"hostname: public_ec2_url /latest/meta-data/hostname. " +

"user Data: public_ec2_url/latest/user-data"]
elasticBeanstalk = [
	"Elastic Bean Stalk => Paas for quick deployment => (Infrastructure provisioning and configuration, Application deployment, Load balancing, Automatic scaling, Health monitoring) ",

	"Elastic Beanstalk runs on the Amazon Linux AMI and the Windows Server AMI ",

	"User has control over key runtime configuration options and resources: EC2 instance type, Database, Amazon EC2 Auto Scaling options. ",

	"There is no charge to use the Elastic Beanstalk service itself. You pay for only the resources used by the underlying services that store and run your applications. ", 

	"You can also adjust load balancer options and access your server log files.",
	"Passenger(web application server for vertical scaling) and Puma(web application server for horizontal scaling) "]
ec2autoScaling = [
	"Auto Scaling" ,

	"Scaling is the ability to increase or decrease compute capacity to meet fluctuating demand.  ",

	"Concepts: Capacity, scaling in or out, Instance health, Termination policy, Launch template   ",

	"Amazon EC2 Auto Scaling ensures application availability by automatically launching or terminating EC2 instances based on scaling options (Manual scaling - minimum/maximum capacity, Scheduled scaling - predictable load changes, Dynamic scaling - as traffic changes occur [simple - on scaling adjustment, set - set of scaling adjustments, target tracking- based on metric], Predictive scaling -  machine learning models to predict expected traffic/ec2 usage )  ",

	"EC2 Cooldown periods can't be specified for step scaling of dynamic scaling  ",

	"Predictive: The model needs historical data from at least 1 day to start making predictions. The model is re-evaluated every 24 hours to create a forecast for the next 48 hours (about 2 days). Predictive scaling removes the need for manually adjusting auto scaling parameters over time. You can even use predictive scaling with dynamic scaling. It is not designed to help in situations where spikes in load are not cyclic or predictable  ",

	  

	"Instance Health Types: (Amazon EC2 status checks and scheduled events (default), Elastic Load Balancing (ELB) health checks, Custom health checks) ", 

	"Some Factors That Can Affect Instance Health: (Incorrect networking or startup configuration, Exhausted memory, Corrupted file system, Incompatible kernel)  ",

	"Termination policy: determines which instance is terminated when scaling in  ",

	"Termination Policy Examples: Default (Availability Zone with the largest number of instances), Oldest instance, newest instance, oldest launch template, Closest to next instance billable hour)  ",

	"Lifecycle hooks provide an opportunity to perform a user action before the completion of a scale-in or scale-out event.  ",

	"A launch template specifies and versions instance configuration information (ec2 launch parameters).   ",

	"AWS strongly recommends that you use a launch template rather than launch configurations to create autoscaling groups  ",

	"Auto Scaling [Group] Policies: (How to manage and scale)  ",

	"Auto Scaling Policies: Amazon CloudWatch alarms, Target tracking policy, Scheduled actions  ",

	"When you create a launch template, all parameters are optional. However, a launch template for an auto scaling group, the ID of the AMI and an instance type are required. If it does not specify an AMI, you cannot add the AMI when you create your auto scaling group.  ",

	"Specify the launch template and the necessary information to configure the EC2 instances in the group.  ",

	"Required configurations: Launch template, Virtual private cloud (VPC), Subnets  ",

	"Optional configurations: Register instances with a load balancer., Turn on ELB health checks., Turn on monitoring with CloudWatch., Configure group size., Configure scaling policies  ",

	  

	"Best practices  ",

	"Use a 1-minute frequency in CloudWatch metric data collection. (for faster response to load changes)  ",

	"Turn on auto-scaling group metrics.  ",

	"Avoid burstable performance instance types. (T3 and T2 are designed for CPU baseline)  ",

	"Steady-state group to help ensure that a single instance is always running.  ",

	"Thrashing is the condition in which there is excessive use of a computer’s virtual memory, and the computer is no longer able to service the resource needs of applications that run on it.  ",

	"Thrashing could occur if instances are removed and added—or added and removed—in succession too quickly.  ",

	"Avoid thrashing: Setting alarms (Configure launches for state changes, CPU utilization is at 90 percent for 10 minutes), Cooldown periods (simple scaling, suspend scaling for 5 minutes.), instance warmup period (step scaling, newly launched instance to warm up in 5 mins)  ",

	"EC2 Autoscaling supports cooldown periods when using simple scaling policies but not when using target tracking policies, step scaling policies, or scheduled scaling.  ",

	"When you manually scale your Amazon EC2 Auto Scaling group, the default is not to wait for the cooldown period. However, you can override the default and honor the cooldown period. Note that if an instance becomes unhealthy, Amazon EC2 Auto Scaling does not wait for the cooldown period to complete before replacing the unhealthy instance. Amazon EC2 Auto Scaling supports both default cooldown periods and scaling-specific cooldown periods.  ",

	"Benefits: Fault tolerance, High Availability, Performance, Cost optimization" ] 
elb = [
	"Elastic Load Balancers (traffic directors)" ,

	"ELB automatically distributes incoming traffic across multiple targets, such as EC2 instances, containers, and IP addresses. "  +

	"Monitors the health of its registered targets and routes traffic to only the healthy targets. "+

	"Automatically scales your load balancer capacity in response to changes in incoming traffic. ",

	"Security features: (single point entry), TLS termination " ,

	"ELB load balancers are often configured to point to Amazon EC2 Auto Scaling groups. ",

	"Types of load balancers: Application Load Balancer (OS layer 7), Gateway Load Balancer (layer 3(gateway), layer 4(load balancing)), Network Load Balancer (TCP), and Classic Load Balancer (old version, discontinued).  ",

	"LBs are registered with target groups except CLB which registers with instances ",

	"How ELB works: "+

	"Before you can use a chosen load balancer and benefit from its features, you must add listeners and register your targets (or target groups) "+

	"Load balancers can have more than one listener.  "+

	"Each listener checks for connection requests from clients, by using the protocol and port that were configured. "+

	"The listener forwards requests to one or more target groups, based on the defined rules. Rules are attached to each listener, and each rule specifies a target group, condition, and priority: When the condition is met, the traffic is forwarded to the target group. "+

	"You must define a default rule for each listener, and you can add rules that specify different target groups based on the content of the request. "+

	"This configuration is also known as content-based routing.Each target group routes requests to one or more registered targets, such as EC2 instances, by using the protocol and port number that you specify: You can register a target with multiple target groups. You can configure health checks for each target group "+

	"ELB Listeners: "+

	"A listener is a process that defines the port and protocol that the load balancer listens on. "+

	"Each load balancer needs at least one listener to accept traffic. "+

	"Up to 50 listeners can be created on a load balancer. "+

	"Routing rules are defined on listeners. ",

	"ELB Targets: " +

	"A target group contains registered targets that provide support to resources such as the following: EC2, ECS instances.  " +

	"A single target can have multiple target group registrations. You can create IPv4 and IPv6 target groups to associate with load balancers. " ,

	"Creating ELBs with CLI (AWS Management Console can be used): " +

	"=>(create-load-balancer, specify two subnets in different AZs)(create-target-group, specify instances vpc)(register-targets)(create-listener)(describe-target-health) "]
lambda = [
	"Lambda is a fully managed service for serverless compute.",

	"Lamda WorkFlow: Upload your code to Lambda, and Lambda takes care of everything that is required to run and scale your code with high availability.2.Set up your code to invoke from other AWS services, or invoke your code directly from any web or mobile application, or HTTP endpoint.3.AWS Lambda runs your code only when invoked. You pay only for the compute time that you consume. You pay nothing when your code is not running.",

	"The runtime of a Lambda function is limited to a maximum of 15 minutes.",

	"Deploying Lambda Functions: 1. Define a handler class in the code for the function. 2. Create the Lambda function by using the AWS Management Console or the AWS Command Line Interface (AWS CLI). 3. Create and assign an AWS Identity and Access Management (IAM) role to the function. Include permissions to access the AWS services that are required. 4. Upload the code for the function. 5. Invoke the function to test it.6.After you deploy the function to production, monitor it by using Amazon CloudWatch",

	"You can configure your Lambda function to pull in additional code and content in the form of layers. A Lambda layer is a .zip archive that contains libraries, data, configuration files, or a custom runtime. By using layers, keep your deployment package small, make development easier, and avoid errors that might occur, such as package dependencies with your function code." ,

	"Lambda Quotas: A function can use up to five layers at a time. The total unzipped size of the function and all its layers cannot exceed the unzipped deployment package size limit of 250 MB. The maximum memory allocation for a single Lambda function is 10 GB. By default, Lambda can handle up to 1,000 concurrent invocations in a single Region." ]
rds = [
	"Backup Options => Snapshots => Manual, Automatic => First snapshot (full data); Subsequent snapshots (remaining/increment data) ",

	"Instance Creation Types: Standard Create => Easy create ",

	"High availability with Multi-AZ deployment: Replication across zones in same vpc ",

	"Failover in RDB: If primary db fails, Amazon RDS uses the standby db instance as new primary instance." ,

	"RDS supports read replicas. (db replicated to accommodate get requests, can be used as primary db manually)" ,

	"RDS Scaling => Vertical Scaling (on relational) on => instance class(compute and memory) and Storage Capacity"  ,

	"DB engines => Aurora (Native to AWS), MySQL, MariaDB, PostgreSQL, MsSQL, Oracle "]
memoryDB = [
	"Amazon MemoryDB for Redis: durable in-memory database service that delivers ultra-fast performance.",

	"Can be used as database or caching service"]
elasticCache = [
	"Serverless caching compatible with memcache and redis."]
cloudFrontLambda = [
	"AWS CloudFront Lambda@Edge is a feature of Amazon CloudFront that lets you run code closer to users of your application, which improves performance and reduces latency"] //<<<<<<<<<

ecr = [
	"A fully managed Docker container registry that developers can use to store, manage, and deploy Docker container images.",

	"Amazon ECR is integrated with Amazon ECS.",

	"You can access Amazon ECR from any Docker environment whether it is in the cloud, on premises, or on your local machine.",

	"Amazon ECR stores your container images in Amazon Simple Storage Service (Amazon S3) so it benefits from the high availability and durability of Amazon S3.",

	"You can transfer your container images to and from Amazon ECS via HTTPS.",

	"You can define and organize (based on your team’s existing workflows) repositories in your Amazon ECR registry by using namespaces.",

	"Your images are also automatically encrypted at rest by using Amazon S3 server-side encryption.",

	"Amazon ECR also supports third-party integrations."]
eks = [
	"A managed service that you can use to run Kubernetes on AWS without needing to install and operate your own Kubernetes clusters",

	"With Amazon EKS, AWS manages upgrades and high availability services for you. Amazon EKS runs three Kubernetes managers across three Availability Zones to provide high availability.",

	"Amazon EKS automatically detects and replaces unhealthy managers and provides automated version upgrades and patching for the managers.",

	"Amazon EKS is also integrated with many AWS services and features to provide scalability and security for your applications, including the following: Elastic Load Balancing (ELB) for load distribution, IAM for authentication, Amazon Virtual Private Cloud (Amazon VPC) for isolation, AWS PrivateLink for private network access, AWS CloudTrail for logging",

	"You can use Amazon EKS to install, manage, and update common operational software for your cluster directly through the Amazon EKS console, AWS Command Line Interface (AWS CLI), and API. AWS validates all operational software, which you can deploy and update during cluster setup or at any time",

	"Operating Kubernetes for production applications presents several challenges: -You must manage the scaling and availability of your Kubernetes control plane by ensuring that you have chosen appropriate instance types, run them across multiple Availability Zones, monitored their health, and replaced unhealthy nodes. -You need to patch and upgrade your control plane and nodes to ensure that you run the latest version of Kubernetes. This patching and upgrading require expertise and a lot of manual work."]
fargate = [
	"AWS Fargate is a compute engine for Amazon ECS and Amazon EKS that gives you the ability to run containers without having to manage servers or clusters.",

	"With Amazon EKS, you can forward container logs from pods running on Fargate to AWS services for log storage and analytics, including Amazon CloudWatch, Amazon OpenSearch Service (successor to Amazon Elasticsearch Service), Amazon Kinesis Data Firehose, and Amazon Kinesis Data Streams."]

appSync = [
	"AWS AppSync creates serverless GraphQL and Pub/Sub APIs that simplify application development through a single endpoint to securely query, update, or publish data."]//<<<<<
amplify = [
	"AWS Amplify is a complete solution for frontend web and mobile developers to build, ship, and host full-stack applications on AWS with the flexibility to leverage the breadth of AWS services as use cases evolve. No cloud expertise is needed."]//<<<<<
appStream = [
	"Amazon AppStream 2.0 is an AWS End User Computing (EUC) service that can be configured for software as a service (SaaS) application streaming or delivery of virtual desktops with selective persistence.", 
	"When AppStream 2.0 is used for virtual desktops, saved files and application settings remain persistent between user sessions, and a fresh virtual desktop is assigned to the user every time they log on. "]
workspacesWeb = [
	"Amazon WorkSpaces Web is a low cost, fully managed, Linux-based service that is designed to facilitate secure browser access to internal websites and SaaS applications from existing web browsers without the administrative burden of appliances, managed infrastructure, specialized client software, or virtual private network (VPN) connections. "]//<<<<<<<<<<

athena = [
	"Amazon Athena is an interactive query service that makes it easy to analyze data in Amazon Simple Storage Service (Amazon S3) by using standard structured query language (SQL).",

	"Handles large-scale datasets with ease •Serverless—Avoids the need to extract, transform, and load (ETL) •Pay only for the queries that you run •Athena automatically runs queries in parallel so most results come back in seconds.",

	"Flow: 1. Create an Amazon Simple Storage Service (Amazon S3) bucket and load data into it–Alternatively, have an existing bucket with data already in it 2. Define the schema (table definition) that describes the data structure 3. Start querying data by using structured query language (SQL)",

	"Use Cases: Athena makes it easier to query logs from services, such as: •AWS CloudTrail •Application Load Balancer logs •Amazon Virtual Private Cloud (Amazon VPC) Flow Logs"]
dataExchange = [
	"AWS Data Exchange is a platform where customers can find, subscribe to, and use third-party data files, tables, and APIs in the cloud.",

	"A data grant is the unit of exchange in AWS Data Exchange that is created by a data sender in order to grant a data receiver access to a data set. When a data sender creates a data grant, a grant request is sent to the data receiver's AWS account. The recipient accepts the data grant to gain access to the underlying data.",

	"As a recipient, you can view all of your current, pending, and expired data grants from the AWS Data Exchange console. You can also discover and subscribe to new third-party data sets available through AWS Data Exchange from the AWS Marketplace catalog."]
amazonemr = [
	"Amazon EMR is a cloud big data solution that lets you run and scale Apache Spark, Hive, and other open-source frameworks for data processing, analytics, and machine learning.",

	"Amazon EMR (previously called Amazon Elastic MapReduce) is a managed cluster platform that simplifies running big data frameworks, such as Apache Hadoop and Apache Spark, on AWS to process and analyze vast amounts of data."]
glue =[
	"AWS Glue is a service that lets you discover, prepare, move, and integrate data from multiple sources for analytics, machine learning, and application development.",

	"ETL"]
msk = [
	"Amazon MSK is a fully managed, secure, and highly available Apache Kafka service that makes it easy to ingest and process streaming data at a low cost."]
openSearch = [
	"Deploy, operate, and scale OpenSearch Service clusters in the AWS Cloud"]
xray = [
	"Collects data about requests that the user's application serves and provides tools to view, filter, and gain insights into that data to identify issues and opportunities for optimization"]
deviceFarm = [
	"AWS Device Farm is an application testing service for users to improve the quality of their web applications and mobile apps by testing them across an extensive range of desktop browsers and real mobile devices."]//<<<<<<<<<<<<<<
iotGreenGrass = [
	"AWS IoT Greengrass is an open source edge runtime and cloud service for building, deploying, and managing device software."]//<<<<<<<<<<<<<<
kendra = [
	"Amazon Kendra is an intelligent enterprise search service that helps the user search across different content repositories with built-in connectors."]//<<<<<<<<<<<<<<
comprehend = [
	"Amazon Comprehend is a natural-language processing (NLP) service that uses ML to uncover valuable insights and connections in text."]//<<<<<<<<<<<<<<
lex=[
	"Amazon Lex is a fully managed artificial intelligence (AI) service with advanced natural language models to design, build, test, and deploy conversational interfaces in applications."]//<<<<<<<<<<<<<<
polly = [
	"Amazon Polly uses deep learning technologies to synthesize natural-sounding human speech so that the user can convert articles to speech. "]//<<<<<<<<<<<<<<
rekognition = [
	"Amazon Rekognition offers pre-trained and customizable computer vision (CV) capabilities to extract information and insights from images and videos."]//<<<<<<<<<<<<<<
sageMaker = [
	"Amazon SageMaker is a fully managed ML service. With SageMaker, data scientists and developers can quickly build and train ML models and then deploy them into a production-ready hosted environment."]//<<<<<<<<<<<<<<
textract = [
	"Amazon Textract is an ML service that automatically extracts text, handwriting, and data from scanned documents. It goes beyond optical character recognition (OCR) to identify, understand, and extract data from forms and tables."]//<<<<<<<<<<<<<<
transcribe = [
	"Amazon Transcribe provides transcription services for audio files and audio streams. It uses advanced ML technologies to recognize spoken words and transcribe them into text."]//<<<<<<<<<<<<<<
translate =[
	"Amazon Translate is a neural machine translation service that delivers fast, high-quality, affordable, and customizable language translation."]//<<<<<<<<<<<<<<
sns = [
	""] //<<<<<<<<
ses= [
	""] //<<<<<<<
pinpoint = [
	"Amazon Pinpoint lets you send personalized and segmented SMS messages to customers across over 240 countries and regions."] //<<<<<<<<<<<<<
personalize = [
	"Amazon Personalize personalizes your customers' experiences of applications with ML"]//<<<<<<<<<<<<<
dataPipeline = [
	"AWS Data Pipeline is a web service that helps move data between different AWS compute and storage services and on-premise data sources1234. It allows for the reliable processing and transformation of data into a legible format for further processing and analysis"]//<<<<<<<<<<<<

aurora = [
	"Created with clusters",

	"An Aurora Cluster is made up of db instances and a cluster volume (high-performance storage subsystem) ",

	"An Auroa Cluster is made up of a primary instance (for crud operations) and up to 15 replicas (for read ops) ",

	"An Aurora cluster volume virtual database storage volume spanning multiple Availability Zones. Each Availability Zone has a copy of the DB cluster data."  ]
redshift = [
	"Amazon Redshift is a fully managed data warehouse service in the cloud. •You can use it to run complex analytic queries against petabytes of structured data. •It uses sophisticated query optimization, columnar storage on high-performance local disks, and parallel query execution.",

	"Features: Management, Security, Compatibility"]
dynamo = [
	"fully managed, key-value NoSQL database, serverless (lambda runs for requests, due to its flexibility and horizontal scaling attribute) ",

"Automated Scaling and data redundancy across chosen aws regions(global tables), automatic backups ",

"Dynamo => Stores Documents as tables => Each DynamoDB table must have a primary key ",

"Every item must have primary keys ",

"A primary key can consist of one(simple => partition key) or two(composite => partition key + sort key/range attribute) attributes. ",

"DynamoDB tables store data in partitions. ",

"DynamoDB automatically adds new partitions when existing partitions are filled.", 

"Items are placed in partition based on item's primary key.(put key in a partition function)"]
dms = [
	"AWS DMS is a service that migrates databases to Amazon Web Services (AWS) quickly and securely.",

"Features: Migrate data to and from most databases. Keep the source database operational during migration. Keep applications live or running during the migration. Conduct syntax migration conversion. Replicate data near-continuously. Consolidate databases. Deploy to multiple Availability Zones for high availability and failover support.",

	"Flow: Source_Database => Source_EndPoint => Replication_Task(instance) => Target_Enpoint => Target_Database",

	"DMS works with multiple targets and sources",

	"Homogeneous database migrations, the source and target database engines are the same or are compatible.",

	"Heterogeneous database migrations, the source and target database engines are not the same or are incompatible. Uses AWS SCT to converts your existing database schema and code to target compatible schema"]
qldb = [
	"Fully managed ledger database that provides a transparent, immutable, and cryptographically verifiable transaction log.",

	"Track and maintain a sequenced history of every application data change using an immutable and transparent journal",

	"Trust the integrity of your data. Built-in cryptographic verification enables third-party validation of data changes."]
neptune = [
	"Fast, reliable, fully managed graph database services used to build and run applications that work with highly connected datasets."]

cli=[
	"Use the aws configure command to specify default settings in AWS CLI. ",
	"The main default settings are the access key ID and the secret access key. ",

	"CLI output options: Text, table, and json(default).",

	" Use export AWS_DEFAULT_OUTPUT=<-output_format-> to specify result" ,

	"to use aws cli, download and extract the aws cli package, then run sudo ./aws/install, check if installed aws --version" ,

	"aws service --<-parameter-> <-paramaer_value-> --<-option-> <-option_value->" ,

	"command details: aws command help" ,


	"Use the --query option to limit fields displayed in the result set ",

	"--filter option is used to restrict the result set filtered on the server side" ,

	"--dry-run option: This option checks for required permissions without making a request "]
cloudTrail = [
	"It continuously monitors account activity and logs hierarchically in S3 bucket you specify",  

	"CloudTrail is an auditing, compliance monitoring, and governance tool classified as a Management and Governance tool", 

	"Will not track events within an Amazon Elastic Compute Cloud (Amazon EC2) instance–Example: Manual shutdown of an instance",

	"Records application programming interface (API) calls for most AWS services–AWS Management Console and AWS Command Line Interface (AWS CLI) activity are also recorded." ,

	"Best Practices: ", 

	"Turn on CloudTrail log file integrity validation. "+ 
	"Aggregate log files to a single S3 bucket. "+
	"Ensure that CloudTrail is enabled across AWS globally. "+
	"Restrict access to CloudTrail S3 buckets. Integrate with Amazon CloudWatch.",
	"Set Up CloudTrail: 1. Configure a new or existing Amazon Simple Storage Service (Amazon S3) bucket for uploading log files. 2. Define a trail to log desired events (all management events are logged by default). 3. Create an Amazon Simple Notification Service (Amazon SNS) topic to receive notifications. 4. Configure Amazon CloudWatch Logs to receive logs from CloudTrail (optional). 5. Turn on log file encryption and integrity validation for log files (optional). 6. Add tags to your trail (optional)."]
cloudWatch = [
	"Monitors the state and utilization of most resources that you can manage under AWS.", 
	"Key concepts: Standard metrics, Custom metrics, Alarms, Notifications",

	"CloudWatch agent collects system-level metrics on EC2 instances, On-premises servers",

	"Metrics exist only in the Region where they are created.",

	"A metric represents a time-ordered set of data points(namespace: monitored service, dimension: metric unique_id, period: length of time ) that are published to CloudWatch.",

	"Standard metrics:•Grouped by service name•Display graphically so that selected metrics can be compared•Only appear if you have used the service in the past 15 months•Reachable programmatically through the AWS Command Line Interface (AWS CLI) or application programming interface (API)",

	"Custom metrics:•Grouped by user-defined namespaces•Publish to CloudWatch by using the AWS CLI, an API, or a CloudWatch agent",

	"Cloudwatch metrics offers three retention schedules:•1-minute data points are available for 15 days.•5-minute data points are available for 63 days.•1-hour data points are available for 455 days.",

	"Cloudwatch Alarm States: Threshold not exceeded: OK, Threshold exceeded: ALARM, Insufficient Data: Alarm has just started, a metric is not available, or insufficient data",

	"EC2 instances only report data every 5 minutes (AWS Free Tier). Enable detailed monitoring on an instance to increase reporting frequency to once every minute. (Extra charges apply)",

	"Use CloudWatch to monitor for suspicious activity, such as: Unusual, prolonged spikes in service usage, such as CPU, disk activity, or Amazon Relational Database (Amazon RDS) usage. Set alerts on billing metrics (you must enable this feature in account settings)",

	"Use Amazon CloudWatch automated dashboards to surface data about your running AWS services through existing monitoring tools"]
stepFunction = [
	"Step Functions provides serverless orchestration for modern applications. •Orchestration centrally manages a workflow by breaking it into multiple steps, adding flow logic, and tracking the inputs and outputs between the steps.",

	"Step Functions gives you the ability to reuse components and use different services in your application. Step Functions also does the following: •Coordinates existing AWS Lambda functions and microservices into applications •Keeps application logic separated from implementation",

	"The workflows that you build with Step Functions are called state machines, and each step of your workflow is called a state. Tasks perform work, either by coordinating another AWS service or an application that you can host anywhere. You can reuse components, edit the sequence of steps, or swap out the code called by task states as your needs change.",

	"Benefits: Productivity. Agility. Resilience.",

	"Features include the following: •Automatic scaling •Fault Tolerance with High availability(Multi AZs) •Pay per use(Billing is metered by state transition) •Security and Compliance(IAM)"]
apiGateway = [
	"Amazon API Gateway handles all the tasks that are involved in accepting and processing concurrent API calls at scale. These tasks include traffic management, authorization and access control, monitoring, and API version management. You pay for only the API calls that you receive and the amount of data that is transferred out.",

	"API Gateway provides you with a dashboard to visually monitor calls to your services so that you can see performance metrics.",

	"API Gateway works with AWS Lambdaso to create serverless APIs: •First, you create REST APIs with API Gateway. •Then, your mobile and web applications can use these APIs to call publicly available AWS services through the code that you run in Lambda. With API Gateway, you can create RESTful resource-based APIs. Then, you can use the data transformation capabilities to generate the requests in the language that your target services expect",

	"Efficient API development •Performance at any scale •Cost savings at scale •Monitoring •Flexible security controls •RESTful API options"]
shell = [
	"Browser-based shell to securely manage, explore, and interact with AWS Services."]
appconfig = [
	"AWS Systems Manager capability to create, manage, and quickly deploy application configurations (collection of settings that influence the behavior of applications)."]

activate = [
	"Provide free resources to startups."]

route53 = [
	"Route 53 is a scalable Domain Name System (DNS) web service.",

"Use cases: Register or transfer a domain name.•Resolve domain names to IP addresses.•Connect to infrastructure.•Distribute traffic across Regions.(outside aws infra as well)•Support high availability and lower latency",

"Route 53 + ELB: By default, AWS assigns a hostname to your load balancer that resolves to a set of IP addresses. Assign your own hostname by using an alias resource record set. Create a Canonical Name Record (CNAME) that points to your load balancer.",

"Routing policies: 1. Simple routing policy (to single resource) 2.Weighted routing policy (to multiple resources) 3.Latency routing policy (to region with low latency) 4. Failover routing policy (configure active/passive setup) 5.Geolocation routing policy (based on DNS query location) 6.Geoproximity routing policy (resource location: traffic flow to an AWS Region, or latitude and longitude) 7.Multivalue answer routing policy (respond to DNS queries => up to 8 healthy records) 8.IP-based routing policy (based on IP address and user location)"]
vpclattice = [
	"Amazon VPC Lattice is an application networking service that consistently connects, monitors, and secures communications between your services, helping to improve productivity so that your developers can focus on building features that matter to your business. You can define policies for network traffic management, access, and monitoring to connect compute services in a simplified and consistent way across instances, containers, and serverless applications."]
cloudFront = [
	"CloudFront is a web service that speeds up the distribution of static and dynamic web content to users through a worldwide network of data centers called edge locations (Point of presence and regional caches) connected to AWS Regions through the AWS network backbone",

"Features: •Security(TLS/SSL, Compliant with Standards) •Availability •Edge computing •Real-time metrics and logging •Continuous deployment(Active/passive or Blue/Green) •Cost-effectiveness",

"CloudFront WorkFlow: 1.A user accesses your website or application and sends a request for an object. 2. DNS routes the request to the CloudFront POP (edge location) that can best serve the request—typically the nearest CloudFront POP in terms of latency and routes the request to that edge location. 3.CloudFront checks its cache for the requested object. If the object is in the cache, CloudFront returns it to the user. else, CloudFront does the following: A.CloudFront compares the request with the specifications in your distribution and forwards the request to your origin server for the corresponding object (for example, to your S3 bucket or your HTTP server). B. The origin server sends the object back to the edge location. C. As soon as the first byte arrives from the origin, CloudFront begins to forward the object to the user. CloudFront also adds the object to the cache for the next time someone requests it.",

"CloudFront costs are calculated based on geographic region, number and type of requests, and the amount of data that is transferred out."]
config = [
	"AWS Config is a service used for assessing, auditing, and evaluating the configuration of your AWS resources for security and compliance." ,

	"Use to Retrieve an inventory of AWS resources. Discover new and deleted resources. Record configuration changes continuously. •Get notified when configurations change"  ,

	"AWS stores configuration changes in s3 bucket. evaluates changes with config rules. send compliance change to SNS." ,

	"Some rules are preconfigured in AWS Config" ]
wellArchitectedFrameworkTool = [
	"evaluating workloads, identifying high-risk issues, and recording improvements"]
trustedAdvisor = [
	"Recommends best practices in cost optimization, performance, security, fault tolerance, service limits",

	"Additional checks and recommendations are available with Business Support or Enterprise Support plans",

	"AWS Trusted Advisor analyzes your AWS environment and provides recommendations for best practices.",

	"Recommendations include links to take direct action."]
prometheus = [
	"Provides highly available, secure, and managed monitoring for your containers. "]
systemManager = [
"AWS System Manager: manage applications and infrastructure on AWS Cloud." +

"(Software Inventory, OS management and configurations, OS patches, Create OS images)" ,
"Components: ",

"Documents = (defines action ssm performs in yaml/json), Automation = (define steps as SSM document), Run Command = (Run ssm, preconfigured),"  +

"Session Manager = (Connect to instances), Patch Manager = (Deploy instance patches at scale), Maintenance Windows = (Schedule maintenance tasks), "  +

"State Manager = (Setting instances' state at scale), Parameter Store = (Manage configuration data/instances), "+

"Inventory = (get an inventory of instances and software installed on them) ",
  

"Patching with Path Manager:" ,

"1. Create a patch baseline, which contains rules that automatically approve or reject released patches. " +

"2. Define a maintenance window, and group instances together for patching. " + 

"3. Apply patches in the maintenance window, and reboot every instance in the patch group. "+ 

"4. Review the results and the details of patch compliance" ,

 
"Maintenance Windows: Create Maintenance Window => Assign targets => Assign tasks => Review task status" ]
cloudFormation = [
	"create, update, and delete a set of AWS resources as a single unit by writing a template file.", 

	"Write automation template, create stack (of resources) from template, Preview Proposed Stack Changes, Detect Drift(stack’s actual configuration differs from expected template configuration), Invoke Lambda Function ",

	"Cloudformation can run templates from s3 buckets. CloudFormation provides the following benefits: reusability, repeatability, and maintainability."  ]
opswork = [
	"AWS OpsWork => Automating Configuration Management => Use Open Source Chef and Puppet platform-based servers to automate configurations.",
	"Types: ", 

	"AWS OpsWorks for Chef = (workflow automation for administrative and operational tasks, such as software and operating system configurations, continuous compliance, package installations, and database setups).",  

	"Automate AWS OpsWorks for Puppet Enterprise = ( workflow automation for orchestration, automated provisioning, and visualization for traceability)." , 

	"AWS OpsWorks Stacks = ( configuration management service that helps you configure and operate applications of all kinds and sizes by using Chef.) "]
auditManager = [
	"AWS Audit Manager helps users continually audit their AWS usage to simplify how they manage risk and compliance with regulations and industry standards. Audit Manager automates evidence collection so users can assess whether their policies, procedures, and activities—also known as controls—are operating effectively. When it's time for an audit, Audit Manager helps users manage stakeholder reviews of their controls. This means that they can build audit-ready reports with much less manual effort."]
controlTower = [
"With AWS Control Tower, users can enforce and manage governance rules for security, operations, and compliance at scale across all their organizations and accounts in the AWS Cloud."]//<<<<<<<<<<<
resourceGroups = [
	"AWS Resource Groups manages and automates tasks on large numbers of resources at one time. A user can use resource groups to organize their AWS resources, and tags are key and value pairs that act as metadata for organizing those resources. With most AWS resources, users have the option of adding tags when creating the resource. "]//<<<<<<<<<<
healthDashboard = [
	"The AWS Health Dashboard is the single place to learn about the availability and operations of AWS services. The user can view the overall status of AWS services, and they can sign in to view personalized communications about their particular AWSaccount or organization."]//<<<<<<<<
computeOptimizer = [
	"AWS Compute Optimizer recommends optimal AWS compute resources(EC2, EBS, Lambda, AWS Fargate with ECS) for workloads. It can help reduce costs and improve performance by using ML to analyze historical utilization metrics."]//<<<<<<<<
disasterRecovery = [
	"By using AWS Elastic Disaster Recovery, a user can increase IT resilience to replicate on-premises or cloud-based applications running on supported operating systems. Users can use the AWS Management Console to configure replication and launch settings, monitor data replication, and launch instances for drills or recovery."]//<<<<<<<<
iq = [
	"AWS IQ: Find and engage experts on AWS."]//<<<<<<<<
launchWizard = [
	"AWS Launch Wizard offers a guided way of sizing, configuring, and deploying AWS resources for third-party applications, such as Microsoft SQL Server Always On and HANA-based SAP systems, without the need to manually identify and provision individual AWS resources. To start, the user inputs their application requirements, including performance, number of nodes, and connectivity, into the service console.",
	 "Launch Wizard then identifies the right AWS resources, such as EC2 instances and Amazon Elastic Block Store (Amazon EBS)volumes, to deploy and run their application.", 
	"Launch Wizard provides an estimated cost of deployment and gives users the ability to modify their resources to instantly view an updated cost assessment. Once the user approves the AWS resources, Launch Wizard automatically provisions and configures the selected resources to create a fully functioning, production-ready application."]//<<<<<<<<
migrationHub = [
	"AWS Migration Hub provides a single location to track migration tasks across multiple AWS tools and partner solutions.", 
	"With Migration Hub, users can choose the AWS and partner migration tools that best fit their needs while providing visibility into the status of their migration projects.", 
	"Migration Hub also provides key metrics and progress information for individual applications, regardless of which tools are used to migrate them. "]//<<<<<<<<
migrationService = [
"AWS Application Migration Serviceis a highly automated lift-and-shift (rehost) solution that simplifies, expedites, and reduces the cost of migrating applications to AWS. Companies can use this service to lift and shift a large number of physical, virtual, or cloud servers without compatibility issues, performance disruption, or long cutover windows. "]
applicationDiscovery = [
	"AWS Application Discovery Service helps systems integrators quickly and reliably plan application migration projects by automatically identifying applications running in on-premises data centers, their associated dependencies, and their performance profile. "]

localZones = [
	"Deploy AWS services close to large population and industry centers."]
outpost = [
	"Delivering AWS infrastructure and services to virtually any on-premises or edge location for a truly consistent hybrid experience."] 
wavelength = [
	"Deploy AWS compute and storage services to the edge of the communications service provider's 5g networks for ultra-low latency. (piggybacking)"]
iotCore = [
	"AWS IoT Core connects billions of Internet of Things (IoT) devices and routes trillions of messages to AWS services without managing infrastructure."]//<<<<<<<<<<<<<
eventbridge = [
	"Serverless Service that uses events to connect application components to build scalable, event-driven applications."]
privateLink = [
	"AWS PrivateLink is a networking construct that allows an application/service residing in one VPC (the “Service Provider VPC”) to be accessed by clients/consumers in (or through) other VPCs within the AWS Region (“Consumer VPCs”)."]
connect = [
	"Omnichannel cloud contact center. (VOIP)"]
resourceManager = [
	"AWS Resource Access Manager (AWS RAM) helps users securely share their resources across AWS accounts, within their organization or organizational units (OUs) in AWS Organizations, and with IAM roles and IAM users for supported resource types.", 
	"A user can use AWS RAM to share resources with other AWS accounts. This eliminates the need to provision and manage resources in every account.",

	"When a user shares a resource with another account, that account is granted access to the resource, and any policies and permissions in that account apply to the shared resource."] //<<<<<<
serviceCatalog = [
	"With AWS Service Catalog, IT administrators can create, manage, and distribute portfolios of approved products to end users, who can then access the products they need in a personalized portal."]//<<<<<<


s3 = [
"Amazon S3 storage classes, stores data in at least three Availability Zones aside one zone specific storage classes." ,

"Stores data us unique objects (<= 5TB) in buckets => (unique == can't be modified, re upload as new versions(S3 versioning)).-" , 

"S3 abides by the law of least privilege with 11 .9’s of durability." ,

"S3 stores object redundantly in one region to make it fault tolerant and accessed globally, hence bucket names should be unique on the internet for granular (unique) access."  ,

"Naming => region/bucket-name/key  https://s3-ap-northeast-1.amazonaws.com/[bucket name]/[Preview2.mp4]" ,

"Feature: Purpose or Benefit => How to Use It", 
"Object lifecycle management: Manage your objects so that they are stored cost-effectively throughout their lifecycle. => Create a lifecycle configuration with rules that define when objects should transition to another storage class and when objects should be deleted.",
"Presigned object URL: Share a private object with a user who does not have AWS security credentials or permissions. => Generate a pre-signed object URL programmatically and provide it to the recipient to access the object.",
"Cross-origin resource sharing (CORS): Allow an S3 bucket that hosts a static website to support CORS by supporting many origins to one bucket.=> Create a CORS configuration on the bucket with rules that identify the authorized origins and HTTP operations.",

"With S3 Object Lock, you can prevent an object from being deleted or overwritten for a fixed amount of time or indefinitely",

"You can manage object retention(Modes: Government, Compliance) in two ways: Retention periods, Legal holds",

"Amazon S3 Types Naming:  Amazon S3 <-zone type-> <-access type->" ,

"Cost of S3 depends on availability and accessibility, size of objects in s3, data transfer out of the region (data transfer between AWS services and S3 within same region)" ,

"Amazon S3 Standard (Default Storage for frequent data access) (4 9s of availability)" ,

"Amazon S3 Intelligent Tiering (alternate between s3 standard and s3 infrequent access based on access patterns for cost efficiency) => long lived data with access patterns that are unknown" ,

"Amazon S3 Standard - Infrequent Access: Highly available (3 9s of availability) yet less frequently accessed data. => long - term storage and backups. Thus, it also works well as a data store for disaster recovery (DR) files." , 

"Amazon S3 One Zone Infrequent Access: Highly available yet less frequently accessed data in one zone => storing secondary backup copies of on-premises data or easily re-creatable data. Amazon S3 Cross-Region Replication" , 

"Amazon S3 Glacier: Ranging availabilty (3 retrieval options -> minutes to hours) for less frequently accessed data." , 

"Amazon S3 Glacier Deep Archive: long-term retention and digital preservation for data that might be accessed once or twice in a year. These objects can be restored within 12 hours. "]
ebs = [
	"Amazon EBS provides persistent block storage volumes. Each EBS volume is automatically replicated within its Availability Zone. With Amazon EBS, you can scale your usage up or down within minutes.",

	"Solid state drives (SSDs): Provisioned IOPS SSD. General Purpose SSD volumes. Hard disk drives (HDDs): Throughput Optimized HDD. Cold HDDVolume",

	"Cost calculated by GB per month and provisioned IOPS per month",

	"Use Cases (SSD): Provisioned IOPS => I/O-intensive workloads, Relational databases, NoSQL databases. General Purpose => Recommended option for most workloads, System boot volumes, Virtual desktops, Low-latency interactive apps, Development and test environments",

	"Use Cases (HDD): Throughput-optimized => Streaming workloads that require consistent and fast throughput at a low price, Big data, Data warehouses, Log processing, Not a boot volume Cold => Throughput-oriented storage for large volumes of data that are infrequently accessed, Scenarios where the lowest storage cost is important, Not a boot volume"]
efs = [
	"Amazon EFS is scalable, fully managed, elastic Network File System (NFS) storage for use with AWS Cloud services and on-premises resources.",

	"Features. Amazon EFS is a petabyte-scale, low-latency file system that does the following: Supports NFS, Is compatible with multiple AWS services, Is compatible with all Linux-based instances and servers, Uses tags",

	"High availability, Dynamic elasticity, Fully managed",

	"Storage classes => Standard storage classes:EFS Standard, EFS Standard Infrequent Access (Standard-IA) •One Zone storage classes => EFS One Zone, EFS One Zone-IA (One Zone-IA)",

	"Performance modes => General Purpose, Max I/O. Throughput modes => Elastic Throughput, Bursting Throughput, Provisioned Throughput",

	"Use Cases => Home directories, File system for enterprise applications, Application testing and development, Database backups, Web serving and content management, Media workflows, Big data analytics"]
storageGateway = [
	"Storage Gateway is a hybrid storage service that enables on-premises applications to use AWS Cloud storage. You can use Storage Gateway for backup and archiving, disaster recovery (DR), cloud data processing, storage tiering, and migration. Storage Gateway supports file, volume, and tape interfaces.",

	"Features: Provides durable storage of on-premises data in the AWS Cloud. Uses standard storage protocols. Provides fully managed caching. Transfers data in an optimized and secure manner. Can be implemented on-premises as a virtual machine (VM) or a hardware device",

	"Amazon S3 File Gateway: Native file access to data stored in Amazon Simple Storage Service (Amazon S3). Amazon FSx File Gateway: Native file access to file shares on FSx for Windows File Server. Volume Gateway: Access to block storage volumes backed up as Amazon Elastic Block Store (Amazon EBS) snapshots. Tape Gateway: Access to a virtual tape library that uses Amazon S3 archive tiers for long-term retention",

	"Storage Gateway use cases: Move backups and archives to the cloud. Reduce on-premises storage with cloud-backed file shares. Provide on-premises applications with low-latency access to data that is stored in AWS. Provide on-premises applications with seamless use of AWS storage."]
instanceStore = [
	"Instance stores provide temporary block-level storage for your EC2 instance. This storage is located on disks that are physically attached to the host computer. (low latency)",

"Instance store data persists for only the lifetime of its associated instance. You cannot create or destroy instance store volumes independently from their instances. You can control whether instance stores are exposed to the EC2 instance or what device name is used",

"Features are available for many instance types but not all instance types. The number, size, and type—such as hard disk drive (HDD) compared with solid-state drive (SSD)—differ by instance type. Note the following information about mounting an instance: An instance store must be mounted before you can access it. Mounting occurs automatically or manually on Linux depending on the instance type.",

"Instance store volumes are used for temporary storage of information that is continually changing, such as the following: Buffers, Caches, Scratch data, Other temporary content. Instance store volumes are used for data that is replicated across a fleet of instances, such as a load-balanced pool of web servers"]
glacier = [
	"Amazon S3 Glacier is a storage service purpose-built for data archiving. It provides high performance, flexible retrieval, and low-cost archive storage in the cloud.",

	"S3 Glacier Instant Retrieval. Rarely accessed but requires retrieval in milliseconds; S3 Glacier Flexible Retrieval => data archived accessed 1–2 times per year and is retrieved asynchronously; S3 Glacier Deep Archive long-term retention and digital preservation accessed 1–2 times per year",

	"A vault is a container for storing archives. Unique URI form:https://region-specific-endpoint/account-id/vaults/vault-name",

	"An archive is any data, such as a photo, video, or document. Unique URI form:https://region-specific-endpoint/account-id/vaults/vault-name/archives/archive-id",

	"An Amazon S3 Glacier job can retrieve an archive or get an inventory of a vault. Unique URI form:https://region-specific-endpoint/account-id/vaults/vault-name/jobs/job-id",

	"An Amazon S3 Glacier notification configuration can notify you when a job is completed. Unique URI form:https://region-specific-endpoint/account-id/vaults/vault-name/notification-configuration",

	"Amazon S3 Glacier provides three archive retrieval options: Expedited: 1–5 minutes, Standard: 3–5 hours, Bulk: 5–12 hours",

	"Security: IAM. Data encryption with AES-256 by default. S3 Glacier Key management",

	"Access Options: AWS Management Console, Amazon S3 Glacier REST API, Java or .NET AWS SDKs, Amazon S3 lifecycle policies"]
snowFamily = [
	"AWS Snow Family: Devices Sent to you to help migrate data from remote locations. (AWS Snowball < AWS Snowball Edge < AWS SnowconeAWS < Snowmobile)"]
transferFamily = [
	"AWS Transfer Family is a secure transfer service that you can use to transfer files into and out of AWS storage services. The Transfer Family supports transferring data from or to the following AWS storage services: Amazon Simple Storage Service (Amazon S3) storage buckets. Amazon Elastic File System (Amazon EFS). Network File System (NFS) file systems",

	"AWS Transfer for SFTP•Retains existing workflows•Stores data in an S3 bucket•Connects directly with your identity provider systems"]
dataSync = [
	"DataSync is an online data transfer service that automates and accelerates the moving of data between on-premises storage systems and AWS storage services. It also moves data between AWS storage services.",

	"Features. Synchronizes between on-premises and AWS. Is efficient and fast. Is a managed service. Connects over the internet or AWS Direct Connect. Includes AWS DataSync Agent (NFS protocol)"]
codeArtefact = [
	"Fully Managed Artifact repository service that organizations use to securely store publish and share packages used in software developments."]
fsx = [
	"Amazon FSx is built on the latest AWS compute, networking, and disk technologies to provide high performance and lower total cost of ownership (TCO). As a fully managed service, Amazon FSx handles hardware provisioning, patching, and backups—freeing users to focus on applications, end users, and their business."]

iam = [
	"Centrally manage authentication and access to Amazon Web Services (AWS) resources." ,

	"Create Users, groups, and roles; Apply Policies to them to control their access to AWS resources "  ,

	"Security Credentials: " ,

	"Email and password(root), Username and Password(IAM user), access/secret keys (cli, sdk, rest), Multifactor Authentication, Key pairs(instances) " ,

	"Best Practices: " ,

	"Create a separate IAM user account with administrative permissions instead of using the AWS account root user. " ,

	"Instead of assigning roles to multiple users, put user in a group and assign only once " ,

	"IAM users: Are an entity/application. Have no default security credentials " ,

	"IAM Groups: Groups are collections of IAM users. No default groups exist. Groups cannot be nested. Users can belong to multiple groups. " ,

	"IAM Roles: Are used to delegate access to AWS resources. Provide temporary access " ,

	"IAM policies: formal statements of one or more permissions. Identity-based policies: attach to principal/identity(IAM user, role, or group); Resource-based policies: attach to AWS resource(s3) " ,

	"IAM permissions: IAM first checks for an explicit deny policy. If one does not exist, it then checks for an explicit allow policy. If neither exists, it reverts to the default: implicit deny (least privilege). " ,

	"For programmatic access (cli and sdk), create an access key ID and a secret access key.  " ,

	"The trust policy specifies who can assume a principal role. The access (or permissions) policy defines which actions and resources the principal is allowed access to " ,

	"Use instance profile to attach an IAM role to an instance " ,

	"First define an IAM role with an IAM policy that grants the required level of access to the S3 bucket.  " ,

	"Then, add the role to an instance profile, and attach the instance profile to the EC2 instance. " ,

	"Benefits of an instance profile: " ,

	"You don’t have to store credentials (access key and secret key) locally on the instance, which is a security risk. " ,

	"Credentials are temporary and rotated automatically. " ,

	"You can use a role for multiple instances (for example, instances in an Auto  Scaling group) "]
organisations = [
	"AWS Organizations is an account management service that enables you to consolidate multiple AWS accounts into anorganizationthat you create and centrally manage.",

	"AWS Organizations include consolidated billing and account management capabilities that help you to better meet the budgetary, security, and compliance needs of your business.",

	"When you attach a policy to one of the nodes in the hierarchy, it flows down and affects all the branches and leaves.",

	"An Organizational Unit(OU) can have only one parent and, currently, each account can be a member of exactly one OU.",

	"An account is a standard AWS account that contains your AWS resources. You can attach a policy to an account to apply controls to only that one account.",

	"Benefits: •Centrally managed access policies across multiple AWS accounts.•Controlled access to AWS services.•Automated AWS account creation and management.•Consolidated billing across multiple AWS accounts.",

	"Security: IAM vs Serice Control Policies in AWS Organisations",

	"Control access with AWS Identity and Access Management (IAM). •IAM policies enable you to allow or deny access to AWS services for users, groups, and roles.•Service control policies (SCPs) enable you to allow or deny access to AWS services for individuals or group accounts in an organizational unit (OU) including root users.",

	"STEPS: Step 1: Create your organization with your current AWS account as the management account. This process assumes that you have administrator permissions in your current account. After you create an organization, you can add accounts to it by creating new accounts or inviting existing accounts to join using the management account.•Step 2: Create organizational units (OUs) in your new organization and move the member accounts in to those OUs.•Step 3: Create service control policies (SCPs), which enable you to apply restrictions to what actions can be delegated to users and roles in the member accounts. An SCP is a type of organization control policy. •Step 4: To test your organization’s policies, sign in as a user for each role in your OUs and see how the service control policies impact account access. Alternatively, you can use the IAM policy simulator to test and troubleshoot IAM and resource-based policies that are attached to IAM users, groups, or roles in your AWS account.",

	"Rules for names: Names must be composed of Unicode characters, Names can be up to 250 characters in length.",

	"Maximum and Minimum Values: Number of AWS accounts: 4. Number of roots: 1. Number of policies: 1,000, Maximum size of a service control policy document: 5,120 bytes. OU maximum nesting in a root: 5, levels of OUs deep under a root Invitations sent per day: 20, Number of member accounts that you can create concurrently: Up to five can be in progress at one time, Number of entities that you can attach a policy to: Unlimited",

	"Accessing AWS Org: AWS Management Console, Accessing AWS Organizations, AWS Command Line Interface (AWS CLI), Software development kits (SDKs), HTTPS query",
	
	"AWS Organizations service control policies (SCPs) apply permissions boundaries to AWS Organizations, organizational units (OUs), or accounts. SCPs use the JSON format. "]
guardDuty = [
	"Intrusion Detection System",
	"Uses threat intelligence feeds, such as lists of malicious IP addresses and domains, and machine learning to identify unexpected and potentially unauthorized and malicious activity within your AWS environment",
	"Detects unauthorized/unexpected activity by analyzing and processing data from different AWS service logs."]
inspector = [
		"Network Discovery Hardening",
		"Scans Amazon Elastic Compute Cloud (Amazon EC2) instances for open network paths and other network reachability issues",
		"Provides guidance about restricting access that is not secure"]
cognito = [
	"User management, authentication, and authorization primarily for apps and websites" ,
	"User pools provide sign-up and sign-in options for app users.", 
	"Identity pools grant users access to AWS services."]
cloudhsm = [
	"Cloud-based hardware security module (HSM) to generate and use your own encryption keys on the AWS Cloud"]
kms = [
	"Creates and manages cryptographic keys and controls their use within AWS services",
	"AWS Key Management Service (AWS KMS)is an encryption and key management service scaled for the cloud. Other AWS KMS keys and functionality are used by other AWS services, and a user can use them to protect data in their own applications that use AWS. "]
acm = [
	"easily provision, manage, and deploy your public and private SSL/TLS certificates." ]
macie = [
	"fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS."]
workspaces = [
"Amazon WorkSpaces to provision virtual, cloud-based Microsoft Windows or Amazon Linux desktops, known as WorkSpaces, for their users. secure, simple to manage, scale consistently",

"Amazon WorkSpaces is a fully managed desktop virtualization service for Windows, Linux, and Ubuntu that gives the user the ability to access resources from any supported device.",

"Security compliance ensures that security controls meet regulatory and contractual requirement." ,

"Amazon WorkSpaces uses either AWS Directory Service or AWS Directory Service for Microsoft Active",  

"Directory to authenticate users.",  

"Customers can deploy and manage applications for their Workspaces by using Amazon Workspaces Application Manager (Amazon WAM)"]
firewallManager = [
	"AWS Firewall Manager simplifies a user’s AWS WAF administration and maintenance tasks across multiple accounts and resources.", 

	"With Firewall Manager, users set up their firewall rules only once. The service automatically applies these rules across accounts and resources, even as new resources are added."]
secretManager = [
	"AWS Secrets Manager helps a user to securely encrypt, store, and retrieve credentials for databases and other services. Instead of hardcoding credentials in applications, a user can make calls to Secrets Manager to retrieve credentials whenever needed.",
	"Secrets Manager helps protect access to IT resources and data by giving users the ability to rotate and manage access to their secrets."]
securityHub = [
	"AWS Security Hub provides users with a comprehensive view of their security state in AWS and helps them check their environment against security industry standards and best practices.",
	"Security Hub collects security data from across AWS accounts, services, and supported third-party partner products and helps users analyze their security trends and identify the highest priority security issues."]
networkFirewall = [
	"AWS Network Firewall is a stateful, managed, network firewall and intrusion detection and prevention service for a user’s VPC that is created in Amazon Virtual Private Cloud (Amazon VPC).",
	"With Network Firewall, a user can filter traffic at the perimeter of a VPC. This includes filtering traffic going to and coming from an internet gateway, NAT gateway, or over VPN or AWS Direct Connect."] // <<<<<<<<<<<<<<<
singleSign= [
	"centrally manage Single Sign On (SSO) access to all Amazon Web Services",
	"With AWS IAM Identity Center (successor to AWS Single Sign-On), a user can manage sign-in security for their workforce identities, also known as workforce users. IAM Identity Center provides one place where users can create or connect workforce users and centrally manage their access across all their AWS accounts and applications.", 
	"Users can use multi-account permissions to assign their workforce users access to AWS accounts. Users can use application assignments to assign their users access to IAM Identity Center enabled applications, cloud applications, and customer Security Assertion Markup Language (SAML 2.0) applications."]
directoryService = [
	"AWS Directory Service provides multiple ways to set up and run Microsoft Active Directory with other AWS services, such as Amazon EC2, Amazon RDS for SQL Server, Amazon FSx for Windows File Server, and AWS IAM Identity Center (successor to AWS Single Sign-On). With AWS Directory Service for Microsoft Active Directory, also known as AWS Managed Microsoft AD, user’s directory-aware workloads and AWS resources can use a managed Active Directory in the AWS Cloud."]

billing = [
	"View the overall status of your costs and usage.",

	"Access your monthly bill.",
	"The AWS Bills page lists the costs that you incurred over the past month for each AWS service.", 

	"It also includes a further breakdown by AWS Region and linked account.",

	"This tool gives you access to the most up-to-date information about your costs and usage, including your monthly bill and the detailed breakdown of the AWS services that you use."]
costandusage = [
	"Visualize, understand, and manage your AWS costs and usage over time.",

	"Forecast future costs and usage",

	"AWS Cost Explorer enables you to view your costs and usage, and to analyze them to identify trends.",

	"You can filter and group data along various dimensions, such as service, instance type, and tag",

	"Two types of default reports",

	"Cost and Usage reports: These reports enable you to understand your costs and usage for all services. For example, the Monthly costs by service report shows your costs for the last 3 months, grouped by service.",

	"Reserved Instance (RI) reports: These reports are specific to your Reserved Instances usage. They provide an understanding of your comparative utilization costs for Reserved Instances versus On-Demand Instances."]
budgets = [
	"Set custom cost and usage budgets.",
	"Receive alerts you when your costs or usage exceed these thresholds."]
costexplorer = [
	"Use AWS Cost Explorer to find the costs that are associated with entire projects or initiatives."]
migrationEvaluator = [
	"Migration Evaluator, formerly known as TSO Logic, is an AWS-provided tool that assists organizations in assessing their current IT environment and estimating the potential cost savings and performance improvements achievable by migrating to Amazon Web Services (AWS)1"] //<<<<<<<<<<<<<<<<

aws["Infrastructure_and_Deployment"] = [
	
	["AWS Global Infrastracture", awsGlobalInfra],

	["AWS Cloud Adoption Framework (Cloud Organizational Dpmts)", caf],

	["AWS Well Architecture Framework (Frameworks aligning with cloud best practises)", waf],

	["AWS Launch Template", launchTemplate]]

aws["Compute"] = [ 
	["#####VMs and Apps", null],

	["EC2 (VM’s on the cloud)", ec2],

	["Elastic Beanstalk (EC2 set up and scaling virtualized)", elasticBeanstalk],

	["EC2 Autoscaling (Scale EC2 Instances on demand)", ec2autoScaling],

	["AWS Lambda (just run your code on AWS)", lambda],

	["AWS Lambda SnapStart (Achieve up to 10x faster Java function startup times)", lambdaSnapStart],

	["AWS Serverless Application Repository(Discover, deploy, and publish serverless applications)", serverlessAppRepo],

	["Amazon WorkSpaces (desktop workstations virtualised)", workspaces],

	["#####Containers", null],

	["ECS (Some docker stuff. Ask the devs)", ecs],

	["EKS (Run a Kubernetes Cluster on AWS)", eks],

	["AWS Fargate (Going Serveless with ECS/EKS)", fargate],

	["AWS LightSail (deploy user-friendly servers)", lightsail],

	["AWS App Runner", appRunner],

	["AWS Batch (Run batch jobs at scale)", batch],

	["AWS Compute Optimizer (Identify Optimal Compute Resources)", computeOptimizer],

	["AWS SimSpace Weaver (Build dynamic, large-scale spatial simulations on AWS managed infrastructure)", simspace],

	["AWS Wavelength (reach application servers(no network hops) running in wavelength zones without leaving ISP's network)", wavelength],

	["VMware Cloud on AWS (Build a hybrid cloud without custom hardware)", vmware],

	["EC2 Image Builder (Build and maintain secure Linux or Windows Server images)", ec2ImageBuilder],

	["AWS Autoscaling (develop scaling plan for multiple AWS resources (ec2, Dynamo, ecs, Aurora ...) to meet application's demand)", autoScaling],

	["AWS Local Zones (place resources, such as compute and storage, in multiple locations closer to your end users.)", localZones],

	["AWS Outposts (deploy AWS Services on-premise/co-locally, to increase latency and extend VPC)", outpost],]

aws["Databases"] = [

	["Amazon neptune (Graphical Database)", neptune],

	["RDS (Configure SQL db's)", rds] ,

	["Aurora (AWS-Native SQL db setup)", aurora] ,

	["Redshift (Data Warehouse - Accumulate Data from various sources)", redshift] ,

	["DynamoDB (AWS-Native NoSQL db setup)", dynamo] ,

	["Amazon Quantum Ledger Database (Cryptographic Database)", qldb],

	["Amazon MemoryDB for Redis (in-memory database)", memoryDB],

	["Amazon elasticCache (strictly for caching with memcache/redis)", elasticCache],

	["Amazon DocumentDB", documentDB],

	["Amazon Keyspaces (Casandra Compatible DB)", keyspaces],

	["Amazon Timestream", timestream],

	["Amazon Database Migration Service (Migrate Databases)", dms] ]

aws["Analytics"] = [

	["AWS X-Ray", xray],

	["Athena (Query S3)", athena], //dataExchange, amazonemr, glue, msk, openSearch

	["Amazon Elastic Map Reduce(Amazon EMR)", amazonemr],

	["AWS Data Exchange (Find, subscribe to, and use third-party data in the cloud Analytics)", dataExchange],
 
	["AWS Data Pipeline (Orchestration service for periodic, data-driven workflows)", dataPipeline],

	["Amazon Glue", glue],

	["Amazon Managed Service for Kafka", msk],

	["Amazon CloudSearch (Managed search service)", cloudSearch],

	["Amazon DataZone (Unlock data across organizational boundaries with built-in governance)", dataZone],

	["Amazon Kinesis (Analyze real-time video and data streams)", kinesis],

	["Amazon QuickSight (Fast business analytics service)", quickSight],

	["Amazon FinSpace (Store, catalog, prepare, and analyze financial industry data in minutes)", finspace],

	["AWS Clean Rooms (Match, analyze, and collaborate on datasets–without sharing or revealing underlying data)", cleanRooms],

	["Apache Spark support on Amazon Athena (Run interactive analytics on Apache Spark in under a second)", sparkonAthena],

	["AWS Lake Formation (Build a secure data lake in days)", lakeFormation],

	["Amazon OpenSearch", openSearch],]

aws["Machine Learning"] = []

aws["Management_and_Governance"] = [

	["AWS Management Console (Web application interface to manage AWS Resources)", managementConsole ] ,

	["AWS CLI (open-source tools to interact with AWS services using commands globally)", cli] ,

	["AWS CloudShell (browser-based, interactive shell environment for resource management preconfigured with CLI and other tools)", shell],

	["Trusted Advisor (inspects our resources and suggest some imporvements with best practises)", trustedAdvisor] ,

	["Config (tracks and evaluates set configurations of AWS resources)", config],

	["Well-Architected Tool (run your architecture against the well architectured framework)" , wellArchitectedFrameworkTool ],

	["AWS Systems Manager (Operatinoal: central place for managing your infrastructure)", systemManager],

	["AWS App Config (manage/deploy app settings fast with Systems Manager)", appconfig],

	["AWS CloudFormation (model/provision infrastructure with code)", cloudFormation],
	
	["Amazon Opswork (application/server management (stacks) and configuaration management(chef/puppet))", opswork],	

	["CloudWatch (configure and respond to alarms based on set metrics)", cloudWatch],

	["CloudTrail (follow the trail and log every activity of end user)", cloudTrail],

	["AWS Step Functions (orchestrate serverless microservices)", stepFunction],

	["AWS Service Catalog", serviceCatalog],

	["AWS Resource Manager", resourceManager],

	["AWS Launch Wizard", launchWizard],

	["AWS Migration Hub", migrationHub],

	["AWS IQ", iq],

	["AWS Resource Groups", resourceManager],

	["AWS Control Tower", controlTower]]

aws["Networking_and_Content_Delivery"] = [ 

	["Amazon VPC (Logical Network in the cloud)", vpc] ,

	["AWS Global Accelerator (Routing traffic to the best-performing AWS endpoints across multiple regions)", accelerator],

	["CloudFront (CDN: Cache contents at edge locations for latency)", cloudFront] , 

	["Route 53 (DNS: Routing End users (internet traffic) to your application)", route53] ,

	["Amazon EventBridge (serverless service that uses events to connect application components together)", eventbridge],

	["AWS Site-toSite VPN (remote connection to VPC from one source)", siteToSiteVPN] ,

	["AWS Client VPN (remote connection to VPC from multiple clients)", clientVPN] ,

	["AWS Direct Connect (establish a dedicated network connection between your on-premises environment and AWS)", directConnect] ,

	["Transit Gateway (interconnects multiple networks [VPC's, on-premises, ...])", transitGateway] ,

	["VPC Peering (VPC peering establishes a networking connection between two VPCs)", vpcpeering],

	["API Gateway (route APIs to multiple AWS Resources)", apiGateway],

	["Amazon Network Firewall", networkFirewall],

	["Amazon VPC Lattice", vpclattice],

	["AWS Private Link (Clients in another VPC conecting to a VPC in same region)", privateLink],

	["Amazon Connect (Omnichannel cloud contact center)", connect],

	["AWS App Mesh. (Monitor and control microservices)", appMesh],

	["AWS Cloud Map (Service discovery for cloud resources)", cloudmap],

	["AWS Private 5G (Easily deploy, manage, and scale a private cellular network)", private5G],

	["AWS Verified Access (Provide secure access to corporate applications without a VPN)", verifiedAccess],

	["Elastic Load Balancing (Distribute incoming traffic across multiple targets)", elb],

	["AWS IoT Core", iotCore]]

aws["Security,_Identity,_and_Compliance"] = [

// ["#####Identity", null],

["AWS Identity and Access Management (IAM) - (Control Access to AWS Resources)", iam] ,  

["AWS Organizations - (centrally manage multiple AWS accounts)", organisations] , 

["AWS Directory Service - (group resources and authenticate users based on Microsoft Directory)", directoryService],

["Amazon Cognito (customer identity management)", cognito] , 

["IAM Identity Center/Amazon Single Sign On (authenticate once, access multiple applications - workforce auth.)", singleSign],

// ["#####Security - Prevention", null],

["AWS Shield - (DDoS protection service - Layer 3/4)", shield] , 

["Amazon Web Application firewall (filter, monitor, and block HTTP traffic, DDOS Layer 7)", a_waf],

["#####Security - Detection", null],

["Amazon Verified Permissions (Fine-grained permissions and authorization for your applications.", verifiedPermissions],
 
["AWS Artifact (On-demand access to AWS’ compliance reports)", artifact], 

["AWS Audit Manager (Continuously audit your AWS usage to simplify how you assess risk and compliance)", auditManager],

["Amazon Inspector (identify vulnerabilities in your EC2 instances and applications)", inspector] , 

["Amazon Managed Service for Prometheus (managed monitoring for your containerized systems)", prometheus],

["Guard Duty - (Sniffs out intrusions, threats and anomalies in an organization’s AWS environment)", guardDuty], 

["GuardDuty ECS Runtime Monitoring. Centralized, fully-managed Amazon ECS container threat detection—including serverless workloads on AWS Fargate", guardDutyECS],

["Amazon Macie - (Help protects sensitive data in s3)", macie],

["AWS Resource Access Manager (Simple, secure service to share AWS resources)", resourceAccessManager],

["#####Security - Response", null],

["Amazon Detective (Investigate potential security issues)", detective],

["#####Compliance", null],

["AWS Artifact (Central resource for security and compliance reports)", artifact] ,  

["#Security - Management", null],

["AWS Firewall Manager - (Manage all firewalls)", firewallManager],

["AWS CloudHSM - (IaaS, Get dedicated Hardware Security Module for Creating Encryption Keys)", cloudhsm],

["AWS Key Management Service - (PaaS, Create and Control Data Encryption Keys - Fully Managed)", kms],

["Amazon Certificate Manager [ACM] - (Provision and manage SSL/TLS certificates)", acm],

["Amazon Security Lake (Automatically centralize your security data with a few clicks)", securityLake],

["Amazon Secrets Manager", secretManager],

["AWS Security Hub", securityHub]]

aws["AWS_Cost_Management"] = [ 

["AWS Cost and Usage Report (save billing reports to s3 for analysis)", costandusage] , 

["AWS Budgets (set budgets, get alerted budget thresholds)", budgets] , 

["AWS Cost Explorer (explore cost and usage over past year)", costexplorer] ,

["AWS Billing Dashboard (Access your monthly bills)", billing],

["AWS Activate (Free Resources for Startups)", activate],

["AWS Migration Evalutor", migrationEvaluator]]

aws["Storage"] = [
["AWS Transfer Family (transfer data)", transferFamily],

["S3 (Cloud storage buckets)" , s3],

["EBS (SSD/HDD root volumes for instances)", ebs],

["EFS (elastic network file sharing between instances)", efs],

["FSx (provisioned file storage service for OS specific use cases)", fsx],

["Storage Gateway (Hybrid Storage - On-prem + Cloud)" , storageGateway],

["AWS Backup (Centralized backup across AWS services)", awsBackup],

["File Gateway (use S3 as a file system)", filegateway],

["Volume Gateway (use S3 as a EBS volume storage - stored/cached)", volumegateway],

["Amazon EBS Snapshots Archive (Archive EBS Snapshots)", ebsSnaps],

["Amazon EFS Archive", efsarchive],

["AWS Elastic Disaster Recovery (Scalable, cost-effective application recovery to AWS)", aws_DisasterRecovery],

["EC2 Instance Store (RAM like storage for EC2 instances)", instanceStore],

["S3 Glacier (Storage for Archiving/Backup)", glacier],

["######Repos", null],

["ECR (Docker Images Repository)", ecr] ,

["AWS Code Artefact - (Software Package repository)", codeArtefact]]

function renderJs () {
const bodyElement = document.getElementsByTagName("BODY")[0];

var headings = Array.from(Object.keys(aws)).map((x,i) => `<h4 onClick=viewContent('${x}',${i})>${x.replace(/_/g," ")}</h4><p id ="content${i}"></p>`).join("")

bodyElement.innerHTML += `<div class="row"><div class="col-lg-5 col-md-12 col-sm-12 overflow-y-auto"><br/>${headings} </div><div id="subcontent" class="col-lg-7 col-md-12 col-sm-12 overflow-y-auto pt-4 pb-2">Click headings to Expand <br/><small><a class="link-opacity-0-hover">aws infrastructure and deployment</a></small></div></div>`
}

function viewContent(heading, paragraph){
	
	const paragraphElement = document.getElementById(`content${paragraph}`)

	if(paragraphElement.innerHTML !== "") {
		paragraphElement.innerHTML = "";
		return;
	}
	
	parent = aws[heading]
	
	var a = parent.length
	while(a--) paragraphElement.innerHTML += `<a class="link-success link-opacity-25-hover" onClick=setSubContent('${heading}',${a})>${parent[a][0]}</a><br/>`

	console.log(paragraphElement)	
}

function setSubContent(heading, index){
	const subContent = document.getElementById(`subcontent`)
	const content = aws[heading][index][1]

	subContent.innerHTML = `<div class="bg-success-subtle rounded p-2"><center>${aws[heading][index][0]}</center><ul><li>` + content.join("</li><li>") + `</li><ul></div>`
}