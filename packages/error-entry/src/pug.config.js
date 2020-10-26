module.exports = {
	locals: {
	  p400: {
		  title: 'Error 400, Bad Request',
		  h1: '400',
		  h2: 'Bad Request',
		  explanation: 'Your client issued a malformed or illegal request.'
	  },
	  p401: {
		  title: 'Error 401, Unauathorized Access',
		  h1: '401',
		  h2: 'Unauathorized Access',
		  explanation: 'You have attempted to access page for which you are not authorized. You will be redirected to the Main page in 30 seconds, or click the following link to manually redirect this page to',
		  pageLink: 'http://localhost:8080'
	  },
	  p402: {
		  title: ' 402, Payment Required',
		  explanation: 'Payment Required.'
	  },
	  p403: {
		  title: ' 403, Forbidden',
		  explanation: 'Access to this resource on the server is denied.'
	  },
	  p404: {
		  title: ' 404, Page Not Found',
		  explanation: 'The page you are looking for can\'t be found. Go home by '
	  },
	  p500: {
		  title: ' 500, HTTP Version not supported',
		  explanation: 'Time to stacktrace...'
	  },
	  p501: {
		  title: ' 501, Not Implemented',
		  explanation: 'The requested method is not implemented by the server...'
	  },
	  p502: {
		  title: ' 502, Bad Gateway',
		  explanation: 'Unable to connect to server.'
	  },
	  p503: {
		  title: ' 503, Service Unavaliable',
		  explanation: 'The service unavaliable'
	  },
	  p504: {
		  title: ' 504, Gataway Time-out',
		  explanation: 'Gataway Time-out'
	  },
	  p505: {
			title: ' 505, Unknow Error Code',
			explanation: 'The server encountered a temporary error and coudn\'t complete your request. Please try again later.'
	  }
	}
};
