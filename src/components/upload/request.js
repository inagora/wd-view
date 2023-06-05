function getError(option, xhr) {
	const msg = `cannot ${option.method} ${option.action} ${xhr.status}'`;
	const err = new Error(msg);
	err.status = xhr.status;
	err.method = option.method;
	err.url = option.action;
	return err;
}

function getBody(xhr) {
	const text = xhr.responseText || xhr.response;
	if (!text) {
		return text;
	}

	try {
		return JSON.parse(text);
	} catch (e) {
		return text;
	}
}

export default function upload(option) {
	const xhr = new window.XMLHttpRequest();

	const formData = new window.FormData();

	if (option.data) {
		Object.keys(option.data).forEach((key) => {
			const value = option.data[key];
			if (Array.isArray(value)) {
				value.forEach((item) => {
					formData.append(`${key}[]`, item);
				});
				return;
			}

			formData.append(key, option.data[key]);
		});
	}

	formData.append(option.filename, option.file);

	xhr.onerror = function error(e) {
		option.onError(e);
	};

	xhr.onload = function onload() {
		if (xhr.status < 200 || xhr.status >= 300) {
			return option.onError(getError(option, xhr), getBody(xhr));
		}

		option.onSuccess(getBody(xhr), xhr);
	};

	xhr.open(option.method, option.action, true);

	if (option.withCredentials && 'withCredentials' in xhr) {
		xhr.withCredentials = true;
	}

	const headers = option.headers || {};
	if (headers['X-Requested-With'] !== null) {
		xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	}

	for (const h in headers) {
		if (headers.hasOwnProperty(h) && headers[h] !== null) {
			xhr.setRequestHeader(h, headers[h]);
		}
	}
	xhr.send(formData);

	return {
		abort() {
			xhr.abort();
		}
	};
}
