/**
 * Holds a set of reusable objects for different aspects of the OAS.
 * All objects defined within the components object will have no
 * effect on the API unless they are explicitly referenced
 * from properties outside the components object.
 *
 * @export
 * @interface IComponentsObject
 */
export interface IComponentsObject {
    /**
     * An object to hold reusable Schema Objects.
     *
     * @type {(IDictionaryOf<ISchemaObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    schemas?: IDictionaryOf<ISchemaObject | IReferenceObject>;
    /**
     * An object to hold reusable Response Objects.
     *
     * @type {(IDictionaryOf<IResponseObject | IReferenceObject>)}
     * @memberof IComponentsObject
     */
    responses?: IDictionaryOf<IResponseObject | IReferenceObject>;
    /**
     * An object to hold reusable Parameter Objects.
     *
     * @type {(IDictionaryOf<IParameterObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    parameters?: IDictionaryOf<IParameterObject | IReferenceObject>;
    /**
     * An object to hold reusable Example Objects.
     *
     * @type {(IDictionaryOf<IExampleObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    examples?: IDictionaryOf<IExampleObject | IReferenceObject>;
    /**
     * An object to hold reusable Request Body Objects.
     *
     * @type {(IDictionaryOf<IRequestBodyObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    requestBodies?: IDictionaryOf<IRequestBodyObject | IReferenceObject>;
    /**
     * An object to hold reusable Header Objects.
     *
     * @type {(IDictionaryOf<IHeaderObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    headers?: IDictionaryOf<IHeaderObject | IReferenceObject>;
    /**
     * An object to hold reusable Security Scheme Objects.
     *
     * @type {(IDictionaryOf<ISecurityRequirementObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    securitySchemes?: IDictionaryOf<ISecurityRequirementObject | IReferenceObject>;
    /**
     * An object to hold reusable Link Objects.
     *
     * @type {(IDictionaryOf<ILinkObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    links?: IDictionaryOf<ILinkObject | IReferenceObject>;
    /**
     * An object to hold reusable Callback Objects.
     *
     * @type {(IDictionaryOf<ICallbackObject|IReferenceObject>)}
     * @memberof IComponentsObject
     */
    callbacks?: IDictionaryOf<ICallbackObject | IReferenceObject>;
}

/**
 * The Header Object follows the structure of the Parameter Object with the following changes: 
 * - name MUST NOT be specified, it is given in the corresponding headers map.
 * - in MUST NOT be specified, it is implicitly in header.
 * - All traits that are affected by the location MUST be applicable to a 
 *      location of header (for example, style).
 *
 * @export
 * @interface IHeaderObject
 * @extends {IParameterObject}
 */
export interface IHeaderObject extends IParameterObject {

}
/**
 * A container for the expected responses of an operation. The container
 * maps a HTTP response code to the expected response. The documentation
 * is not necessarily expected to cover all possible HTTP response codes
 * because they may not be known in advance. However, documentation is expected
 * to cover a successful operation response and any known errors.
 *
 * The default MAY be used as a default response object for all HTTP codes
 * that are not covered individually by the specification.
 *
 * The Responses Object MUST contain at least one response code, and
 * it SHOULD be the response for a successful operation call.
 *
 * Any HTTP status code can be used as the property name, but only one
 * property per code, to describe the expected response for that HTTP status code.
 *  A Reference Object can link to a response that is defined in the OpenAPI
 * Object's components/responses section. This field MUST be enclosed in quotation
 *  marks (for example, "200") for compatibility between JSON and YAML. To define a
 * range of response codes, this field MAY contain the uppercase wildcard character X.
 * For example, 2XX represents all response codes between [200-299]. Only the following
 * range definitions are allowed: 1XX, 2XX, 3XX, 4XX, and 5XX. If a response
 * is defined using an explicit code, the explicit code definition takes
 * precedence over the range definition for that code.
 *
 * @export
 * @interface IResponsesObject
 * @extends {(IDictionaryOf<IResponseObject | IReferenceObject>)}
 */
export interface IResponsesObject extends IDictionaryOf<IResponseObject | IReferenceObject | undefined> {
    /**
     * The documentation of responses other than the ones declared for specific HTTP response codes.
     * Use this field to cover undeclared responses. A Reference Object can link to a response
     * that the OpenAPI Object's components/responses section defines.
     *
     * @type {(IResponseObject | IReferenceObject)}
     * @memberof IResponsesObject
     */
    default?: IResponseObject | IReferenceObject;
}

/**
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a name and location.
 *
 * @export
 * @interface IParameterObject
 */
export interface IParameterObject {
    /**
     * The name of the parameter. Parameter names are case sensitive.
     *
     * If in is "path", the name field MUST correspond to a template expression
     * occurring within the path field in the Paths Object. See Path Templating
     * for further information.
     *
     * If in is "header" and the name field is "Accept", "Content-Type" or "Authorization",
     * the parameter definition SHALL be ignored. For all other cases, the name corresponds
     * to the parameter name used by the in property.
     *
     * @type {string}
     * @memberof IParameterObject
     */
    name: string;
    /**
     * The location of the parameter. Possible values are "query",
     * "header", "path" or "cookie".
     *
     * @type {string}
     * @memberof IParameterObject
     */
    in: string;
    /**
     * A brief description of the parameter. This could contain examples of
     * use. CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IParameterObject
     */
    description?: string;
    /**
     * Determines whether this parameter is mandatory. If the parameter location
     * is "path", this property is REQUIRED and its value MUST be true.
     * Otherwise, the property MAY be included and its default value is false.
     *
     * @type {boolean}
     * @memberof IParameterObject
     */
    required?: boolean;
    /**
     * Specifies that a parameter is deprecated and SHOULD be
     * transitioned out of usage. Default value is false.
     *
     * @type {boolean}
     * @memberof IParameterObject
     */
    deprecated?: boolean;
    /**
     * Sets the ability to pass empty-valued parameters. This is valid only
     * for query parameters and allows sending a parameter with an empty
     * value. Default value is false. If style is used, and if behavior
     * is n/a (cannot be serialized), the value of allowEmptyValue SHALL
     * be ignored. Use of this property is NOT RECOMMENDED, as it is likely
     * to be removed in a later revision.
     *
     * @type {boolean}
     * @memberof IParameterObject
     */
    allowEmptyValue?: boolean;
    /**
     * Describes how the parameter value will be serialized depending on the
     * type of the parameter value. Default values (based on value of in):
     * for query - form; for path - simple; for header - simple;
     * for cookie - form.
     *
     * @type {string}
     * @memberof IParameterObject
     */
    style?: string;
    /**
     * When this is true, parameter values of type array or object generate
     * separate parameters for each value of the array or key-value pair
     * of the map. For other types of parameters this property has no
     * effect. When style is form, the default value is true. For all
     * other styles, the default value is false.
     *
     * @type {boolean}
     * @memberof IParameterObject
     */
    explode?: boolean;
    /**
     * Determines whether the parameter value SHOULD allow reserved characters,
     * as defined by RFC3986 :/?#[]@!$&'()*+,;= to be included without percent-encoding.
     * This property only applies to parameters with an in value of query.
     * The default value is false.
     *
     * @type {boolean}
     * @memberof IParameterObject
     */
    allowReserved: boolean;
    /**
     * The schema defining the type used for the parameter.
     *
     * @type {(ISchemaObject | IReferenceObject)}
     * @memberof IParameterObject
     */
    schema?: ISchemaObject | IReferenceObject;
    /**
     * Example of the parameter's potential value. The example SHOULD match the
     * specified schema and encoding properties if present. The example field
     * is mutually exclusive of the examples field. Furthermore, if referencing
     * a schema that contains an example, the example value SHALL override the
     * example provided by the schema. To represent examples of media types
     * that cannot naturally be represented in JSON or YAML, a string value can
     * contain the example with escaping where necessary.
     *
     * @type {*}
     * @memberof IParameterObject
     */
    example?: any;
    /**
     * Examples of the parameter's potential value. Each example SHOULD contain a value
     * in the correct format as specified in the parameter encoding. The examples
     * field is mutually exclusive of the example field. Furthermore, if referencing
     * a schema that contains an example, the examples value SHALL override
     * the example provided by the schema.
     *
     * @type {(IDictionaryOf<IExampleObject | IReferenceObject>)}
     * @memberof IParameterObject
     */
    examples?: IDictionaryOf<IExampleObject | IReferenceObject>;
    /**
     * A map containing the representations for the parameter. The key is the media
     * type and the value describes it. The map MUST only contain one entry.
     *
     * @type {IDictionaryOf<IMediaTypeObject>}
     * @memberof IParameterObject
     */
    content?: IDictionaryOf<IMediaTypeObject>;
}

/**
 * The Schema Object allows the definition of input and output data types.
 * These types can be objects, but also primitives and arrays. This object is
 * an extended subset of the JSON Schema Specification Wright Draft 00.
 *
 * @export
 * @interface ISchemaObject
 */
export interface ISchemaObject extends IJSONSchema {
    /**
     * A true value adds "null" to the allowed type specified by the type
     * keyword, only if type is explicitly defined within the same
     * Schema Object. Other Schema Object constraints retain their
     * defined behavior, and therefore may disallow the use of null
     * as a value. A false value leaves the specified or default
     * type unmodified. The default value is false.
     *
     * @type {boolean}
     * @memberof ISchemaObject
     */
    nullable?: boolean;
    /**
     * Adds support for polymorphism. The discriminator is an object
     * name that is used to differentiate between other schemas which
     * may satisfy the payload description. See Composition and
     * Inheritance for more details.
     *
     * @type {IDiscriminatorObject}
     * @memberof ISchemaObject
     */
    discriminator?: IDiscriminatorObject;
    /**
     * Relevant only for Schema "properties" definitions. Declares the
     * property as "read only". This means that it MAY be sent as part
     * of a response but SHOULD NOT be sent as part of the request.
     * If the property is marked as readOnly being true and is in the
     * required list, the required will take effect on the response
     * only. A property MUST NOT be marked as both readOnly and
     * writeOnly being true. Default value is false.
     *
     * @type {boolean}
     * @memberof ISchemaObject
     */
    readOnly?: boolean;
    /**
     * Relevant only for Schema "properties" definitions. Declares the property
     * as "write only". Therefore, it MAY be sent as part of a request
     * but SHOULD NOT be sent as part of the response. If the property
     * is marked as writeOnly being true and is in the required list,
     * the required will take effect on the request only. A property
     * MUST NOT be marked as both readOnly and writeOnly being true.
     * Default value is false.
     *
     * @type {boolean}
     * @memberof ISchemaObject
     */
    writeOnly?: boolean;
    /**
     * This MAY be used only on properties schemas. It has no effect on root
     * schemas. Adds additional metadata to describe the XML
     * representation of this property.
     *
     * @type {IXMLObject}
     * @memberof ISchemaObject
     */
    xml?: IXMLObject;
    /**
     * Additional external documentation for this schema.
     *
     * @type {IExternalDocumentationObject}
     * @memberof ISchemaObject
     */
    externalDocs?: IExternalDocumentationObject;
    /**
     * A free-form property to include an example of an instance for this schema.
     * To represent examples that cannot be naturally represented in JSON or
     * YAML, a string value can be used to contain the example with
     * escaping where necessary.
     *
     * @type {*}
     * @memberof ISchemaObject
     */
    example: any;
    /**
     * Specifies that a schema is deprecated and SHOULD be transitioned
     * out of usage. Default value is false.
     *
     * @type {boolean}
     * @memberof ISchemaObject
     */
    deprecated: boolean;
}

/**
 * Describes a single response from an API Operation, including design-time,
 * static links to operations based on the response.
 *
 * @export
 * @interface IResponseObject
 */
export interface IResponseObject {
    /**
     * A short description of the response. CommonMark syntax
     * MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IResponseObject
     */
    description: string;
    /**
     * Maps a header name to its definition. RFC7230 states header
     * names are case insensitive. If a response header is defined
     * with the name "Content-Type", it SHALL be ignored.
     *
     * @type {(IDictionaryOf<IHeaderObject | IReferenceObject>)}
     * @memberof IResponseObject
     */
    headers?: IDictionaryOf<IHeaderObject | IReferenceObject>;
    /**
     * A map containing descriptions of potential response payloads.
     * The key is a media type or media type range and the value describes
     * it. For responses that match multiple keys, only the most specific
     * key is applicable. e.g. text/plain overrides text/*
     *
     * @type {IDictionaryOf<IMediaTypeObject>}
     * @memberof IResponseObject
     */
    content?: IDictionaryOf<IMediaTypeObject>;
    /**
     * A map of operations links that can be followed from the response.
     * The key of the map is a short name for the link, following the naming
     * constraints of the names for Component Objects.
     *
     * @type {(IDictionaryOf<ILinkObject | IReferenceObject>)}
     * @memberof IResponseObject
     */
    links?: IDictionaryOf<ILinkObject | IReferenceObject>;
}

/**
 * A metadata object that allows for more fine-tuned XML model definitions.
 * When using arrays, XML element names are not inferred
 * (for singular/plural forms) and the name property SHOULD be used to
 * add that information. See examples for expected behavior.
 *
 * @export
 * @interface IXMLObject
 */
export interface IXMLObject {
    /**
     * Replaces the name of the element/attribute used for the described
     * schema property. When defined within items, it will affect the name
     * of the individual XML elements within the list. When defined alongside
     * type being array (outside the items), it will affect the wrapping
     * element and only if wrapped is true. If wrapped is false, it will be ignored.
     *
     * @type {string}
     * @memberof IXMLObject
     */
    name?: string;
    /**
     * The URI of the namespace definition. Value MUST be in the form of an absolute URI.
     *
     * @type {string}
     * @memberof IXMLObject
     */
    namespace?: string;
    /**
     * The prefix to be used for the name.
     *
     * @type {string}
     * @memberof IXMLObject
     */
    prefix?: string;
    /**
     * Declares whether the property definition translates to an attribute instead
     * of an element. Default value is false.
     *
     * @type {boolean}
     * @memberof IXMLObject
     */
    attribute?: boolean;
    /**
     * MAY be used only for an array definition. Signifies whether the array is
     * wrapped (for example, <books><book/><book/></books>) or unwrapped (<book/><book/>).
     * Default value is false. The definition takes effect only when definedalongside type being array (outside the items).
     *
     * @type {boolean}
     * @memberof IXMLObject
     */
    wrapped?: boolean;
}

/**
 * Each Media Type Object provides schema and examples for the
 * media type identified by its key.
 *
 * @export
 * @interface IMediaTypeObject
 */
export interface IMediaTypeObject {
    /**
     * The schema defining the content of the request, response, or parameter.
     *
     * @type {(ISchemaObject | IReferenceObject)}
     * @memberof IMediaTypeObject
     */
    schema?: ISchemaObject | IReferenceObject;
    /**
     * Example of the media type. The example object SHOULD be in the correct format
     * as specified by the media type. The example field is mutually exclusive of
     * the examples field. Furthermore, if referencing a schema which contains
     * an example, the example value SHALL override the example provided by the schema.
     *
     * @type {*}
     * @memberof IMediaTypeObject
     */
    example?: any;
    /**
     * Examples of the media type. Each example object SHOULD match the media
     * type and specified schema if present. The examples field is mutually
     * exclusive of the example field. Furthermore, if referencing a schema
     * which contains an example, the examples value SHALL override the
     * example provided by the schema.
     *
     * @type {(IDictionaryOf<IExampleObject|IReferenceObject>)}
     * @memberof IMediaTypeObject
     */
    examples?: IDictionaryOf<IExampleObject | IReferenceObject>;
    /**
     * A map between a property name and its encoding information. The key,
     * being the property name, MUST exist in the schema as a property.
     * The encoding object SHALL only apply to requestBody objects when
     * the media type is multipart or application/x-www-form-urlencoded.
     *
     * @type {IDictionaryOf<IEncodingObject>}
     * @memberof IMediaTypeObject
     */
    encoding?: IDictionaryOf<IEncodingObject>;
}

/**
 * A map of possible out-of band callbacks related to the parent operation.
 * Each value in the map is a Path Item Object that describes a set of
 * requests that may be initiated by the API provider and the expected
 * responses. The key value used to identify the path item object is an
 * expression, evaluated at runtime, that identifies a URL to use for
 * the callback operation.
 *
 * @export
 * @interface ICallbackObject
 * @extends {IDictionaryOf<IPathItemObject>}
 */
export interface ICallbackObject extends IDictionaryOf<IPathItemObject> { }

/**
 * A single encoding definition applied to a single schema property.
 *
 * @export
 * @interface IEncodingObject
 */
export interface IEncodingObject {
    /**
     * The Content-Type for encoding a specific property.
     * Default value depends on the property type: for string with
     * format being binary – application/octet-stream; for other
     * primitive types – text/plain; for object - application/json;
     * for array – the default is defined based on the inner type.
     * The value can be a specific media type (e.g. application/json),
     * a wildcard media type (e.g. image/*), or a comma-separated
     * list of the two type
     *
     * @type {string}
     * @memberof IEncodingObject
     */
    contentType?: string;
    /**
     * A map allowing additional information to be provided as headers,
     * for example Content-Disposition. Content-Type is described separately
     * and SHALL be ignored in this section. This property SHALL be ignore
     * if the request body media type is not a multipart.
     *
     * @type {(IDictionaryOf<IHeaderObject | IReferenceObject>)}
     * @memberof IEncodingObject
     */
    headers?: IDictionaryOf<IHeaderObject | IReferenceObject>;
    /**
     * Describes how a specific property value will be serialized depending
     * on its type. See Parameter Object for details on the style property.
     * The behavior follows the same values as query parameters,
     * including default values. This property SHALL be ignored if
     * the request body media type is not application/x-www-form-urlencoded.
     *
     * @type {string}
     * @memberof IEncodingObject
     */
    style?: string;
    /**
     * When this is true, property values of type array or object generate
     * separate parameters for each value of the array, or key-value-pair
     * of the map. For other types of properties this property has no effect.
     * When style is form, the default value is true. For all other styles,
     * the default value is false. This property SHALL be ignored if the
     * request body media type is not application/x-www-form-urlencoded.
     *
     * @type {boolean}
     * @memberof IEncodingObject
     */
    explode?: boolean;
    /**
     * Determines whether the parameter value SHOULD allow reserved
     * characters, as defined by RFC3986 :/?#[]@!$&'()*+,;= to be
     * included without percent-encoding. The default value is false.
     * This property SHALL be ignored if the request body media type
     * is not application/x-www-form-urlencoded.
     *
     * @type {boolean}
     * @memberof IEncodingObject
     */
    allowReserved?: boolean;
}

/**
 * Interface describing an example
 *
 * @export
 * @interface IExampleObject
 */
export interface IExampleObject {
    /**
     * Short description for the example.
     *
     * @type {string}
     * @memberof IExampleObject
     */
    summary?: string;
    /**
     * Long description for the example. CommonMark syntax MAY be
     * used for rich text representation.
     *
     * @type {string}
     * @memberof IExampleObject
     */
    description?: string;
    /**
     * Embedded literal example. The value field and externalValue
     * field are mutually exclusive. To represent examples of media
     * types that cannot naturally represented in JSON or YAML,
     * use a string value to contain the example, escaping where necessary.
     *
     * @type {*}
     * @memberof IExampleObject
     */
    value: any;
    /**
     * A URL that points to the literal example. This provides the
     * capability to reference examples that cannot easily be included
     * in JSON or YAML documents. The value field and externalValue
     * field are mutually exclusive.
     *
     * @type {string}
     * @memberof IExampleObject
     */
    externalValue?: string;
}

/**
 * License information for the exposed API.
 *
 * @export
 * @interface ILicenseObject
 */
export interface ILicenseObject {
    /**
     * The license name used for the API.
     *
     * @type {string}
     * @memberof ILicenseObject
     */
    name: string;
    /**
     * A URL to the license used for the API. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof ILicenseObject
     */
    url?: string;
}

/**
 * Allows configuration of the supported OAuth Flows.
 *
 * @export
 * @interface IOAuthFlowsObject
 */
export interface IOAuthFlowsObject {
    /**
     * Configuration for the OAuth Implicit flow
     *
     * @type {IOAuthFlowObject}
     * @memberof IOAuthFlowsObject
     */
    implicit?: IOAuthFlowObject;
    /**
     * Configuration for the OAuth Resource Owner Password flow
     *
     * @type {IOAuthFlowObject}
     * @memberof IOAuthFlowsObject
     */
    password?: IOAuthFlowObject;
    /**
     * Configuration for the OAuth Client Credentials flow. Previously
     * called application in OpenAPI 2.0.
     *
     * @type {IOAuthFlowObject}
     * @memberof IOAuthFlowsObject
     */
    clientCredentials?: IOAuthFlowObject;
    /**
     * Configuration for the OAuth Authorization Code flow. Previously
     * called accessCode in OpenAPI 2.0.
     *
     * @type {IOAuthFlowObject}
     * @memberof IOAuthFlowsObject
     */
    authorizationCode?: IOAuthFlowObject;
}

/**
 * Configuration details for a supported OAuth Flow
 *
 * @export
 * @interface IOAuthFlowObject
 */
export interface IOAuthFlowObject {
    /**
     * The authorization URL to be used for this flow. This MUST be in the form of a URL.
     *
     * @type {string}
     * @memberof IOAuthFlowObject
     */
    authorizationUrl: string;
    /**
     *  The token URL to be used for this flow. This MUST be in the form of a URL.
     *
     * @type {string}
     * @memberof IOAuthFlowObject
     */
    tokenUrl: string;
    /**
     * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL.
     *
     * @type {string}
     * @memberof IOAuthFlowObject
     */
    refreshUrl?: string;
    /**
     * The available scopes for the OAuth2 security scheme. A map between the scope
     * name and a short description for it. The map MAY be empty.
     *
     * @type {IDictionaryOf<string>}
     * @memberof IOAuthFlowObject
     */
    scopes: IDictionaryOf<string>;
}

/**
 * Contact information for the exposed API.
 *
 * @export
 * @interface IContactObject
 */
export interface IContactObject {
    /**
     * he identifying name of the contact person/organization.
     *
     * @type {string}
     * @memberof IContactObject
     */
    name?: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IContactObject
     */
    url?: string;
    /**
     * The email address of the contact person/organization.
     * MUST be in the format of an email address.
     *
     * @type {string}
     * @memberof IContactObject
     */
    email?: string;
}

/**
 * The object provides metadata about the API.
 *
 * The metadata MAY be used by the clients if needed, and
 * MAY be presented in editing or documentation generation
 * tools for convenience.
 *
 * @export
 * @interface IInfoObject
 */
export interface IInfoObject {
    /**
     * The title of the API.
     *
     * @type {string}
     * @memberof IInfoObject
     */
    title: string;
    /**
     * A short description of the API. CommonMark syntax
     * MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IInfoObject
     */
    description?: string;
    /**
     * A URL to the Terms of Service for the API. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IInfoObject
     */
    termsOfService?: string;
    /**
     * The contact information for the exposed API.
     *
     * @type {IContactObject}
     * @memberof IInfoObject
     */
    contact?: IContactObject;
    /**
     * The license information for the exposed API.
     *
     * @type {ILicenseObject}
     * @memberof IInfoObject
     */
    license?: ILicenseObject;
    /**
     * The version of the OpenAPI document (which is distinct from the
     * OpenAPI Specification version or the API implementation version).
     *
     * @type {string}
     * @memberof IInfoObject
     */
    version: string;
}

/**
 * Interface describing a generic dictionary
 *
 * @export
 * @interface IDictionaryOf
 * @template AType
 */
export interface IDictionaryOf<AType> {
    [name: string]: AType;
}

/**
 * An object representing a Server Variable for server URL template substitution.
 *
 * @export
 * @interface IServerVariableObject
 */
export interface IServerVariableObject {
    /**
     * An enumeration of string values to be used if the substitution options
     * are from a limited set. The array SHOULD NOT be empty.
     *
     * @type {string[]}
     * @memberof IServerVariableObject
     */
    enum?: string[];
    /**
     * The default value to use for substitution, which SHALL be sent if an
     * alternate value is not supplied. Note this behavior is different than
     * the Schema Object's treatment of default values, because in those cases
     *
     * parameter values are optional. If the enum is defined, the value SHOULD
     * exist in the enum's values.
     *
     * @type {string}
     * @memberof IServerVariableObject
     */
    default: string;
    /**
     * An optional description for the server variable. CommonMark syntax MAY be
     * used for rich text representation.
     *
     * @type {string}
     * @memberof IServerVariableObject
     */
    description?: string;
}

/**
 * An object representing a Server.
 *
 * @export
 * @interface IServerObject
 */
export interface IServerObject {
    /**
     * A URL to the target host. This URL supports Server Variables
     * and MAY be relative, to indicate that the host location is
     * relative to the location where the OpenAPI document is being served.
     *
     * Variable substitutions will be made when a variable is named in {brackets}.
     *
     * @type {string}
     * @memberof IServerObject
     */
    url: string;
    /**
     * An optional string describing the host designated by the URL.
     * CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IServerObject
     */
    description?: string;
    /**
     * A map between a variable name and its value. The value is used
     * for substitution in the server's URL template.
     *
     * @type {IServerVariableObjectDictionary}
     * @memberof IServerObject
     */
    variables: IDictionaryOf<IServerVariableObject>;
}

/**
 * A simple object to allow referencing other components in the
 * specification, internally and externally.
 *
 * @export
 * @interface IReferenceObject
 */
export interface IReferenceObject {
    /**
     * The reference string
     *
     * @type {string}
     * @memberof IReferenceObject
     */
    $ref: string;
}

/**
 * Describes a single API operation on a path.
 *
 * @export
 * @interface IOperationObject
 */
export interface IOperationObject {
    /**
     * A list of tags for API documentation control. Tags can be used
     * for logical grouping of operations by resources or any other qualifier.
     *
     * @type {string[]}
     * @memberof IOperationObject
     */
    tags?: string[];
    /**
     * A short summary of what the operation does.
     *
     * @type {string}
     * @memberof IOperationObject
     */
    summary?: string;
    /**
     * A verbose explanation of the operation behavior.
     * CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IOperationObject
     */
    description?: string;
    /**
     * Additional external documentation for this operation.
     *
     * @type {IExternalDocumentationObject}
     * @memberof IOperationObject
     */
    externalDocs?: IExternalDocumentationObject;
    /**
     * Unique string used to identify the operation. The id MUST be unique
     * among all operations described in the API. The operationId value
     * is case-sensitive. Tools and libraries MAY use the operationId to
     * uniquely identify an operation, therefore, it is RECOMMENDED to
     * follow common programming naming conventions.
     *
     * @type {string}
     * @memberof IOperationObject
     */
    operationId?: string;
    /**
     * A list of parameters that are applicable for this operation.
     * If a parameter is already defined at the Path Item, the new definition
     * will override it but can never remove it. The list MUST NOT include
     * duplicated parameters. A unique parameter is defined by a combination
     * of a name and location. The list can use the Reference Object to link
     * to parameters that are defined at the OpenAPI Object's components/parameters.
     *
     * @type {(IParameterObject[] | IReferenceObject[])}
     * @memberof IOperationObject
     */
    parameters?: IParameterObject[] | IReferenceObject[];
    /**
     * The request body applicable for this operation. The requestBody is only
     * supported in HTTP methods where the HTTP 1.1 specification RFC7231 has
     * explicitly defined semantics for request bodies. In other cases where
     * the HTTP spec is vague, requestBody SHALL be ignored by consumers.
     *
     * @type {IRequestBodyObject}
     * @memberof IOperationObject
     */
    requestBody?: IRequestBodyObject | IReferenceObject;
    /**
     * The list of possible responses as they are returned from executing this operation.
     *
     * @type {IResponsesObject}
     * @memberof IOperationObject
     */
    responses: IResponsesObject;
    /**
     * A map of possible out-of band callbacks related to the parent operation.
     * The key is a unique identifier for the Callback Object. Each value in the
     * map is a Callback Object that describes a request that may be initiated
     * by the API provider and the expected responses.
     *
     * @type {(IDictionaryOf<ICallbackObject | IReferenceObject>)}
     * @memberof IOperationObject
     */
    callbacks?: IDictionaryOf<ICallbackObject | IReferenceObject>;
    /**
     * Declares this operation to be deprecated. Consumers SHOULD refrain
     * from usage of the declared operation. Default value is false.
     *
     * @type {boolean}
     * @memberof IOperationObject
     */
    deprecated?: boolean;
    /**
     * A declaration of which security mechanisms can be used for this operation.
     * The list of values includes alternative security requirement objects that
     * can be used. Only one of the security requirement objects need to be
     * satisfied to authorize a request. To make security optional, an empty security
     * requirement ({}) can be included in the array. This definition overrides any
     * declared top-level security. To remove a top-level security declaration,
     * an empty array can be used.
     *
     * @type {ISecurityRequirementObject[]}
     * @memberof IOperationObject
     */
    security?: ISecurityRequirementObject[];
    /**
     * An alternative server array to service this operation. If an alternative
     * server object is specified at the Path Item Object or Root level,
     * it will be overridden by this value.
     *
     * @type {IServerObject[]}
     * @memberof IOperationObject
     */
    servers?: IServerObject[];
}

/**
 * Interface for describing an extension to an object
 *
 * @export
 * @interface IExtension
 * @extends {IDictionaryOf<any>}
 */
export interface IExtension extends IDictionaryOf<any> { }

/**
 * Describes the operations available on a single path. A Path Item MAY be empty,
 * due to ACL constraints. The path itself is still exposed to the documentation
 * viewer but they will not know which operations and parameters are available.
 *
 * @export
 * @interface IPathItemObject
 */
export interface IPathItemObject {
    /**
     * Allows for an external definition of this path item. The referenced
     * structure MUST be in the format of a Path Item Object.
     * In case a Path Item Object field appears both in the defined object
     * and the referenced object, the behavior is undefined.
     *
     * @type {string}
     * @memberof IPathItemObject
     */
    $ref?: string;
    /**
     * An optional, string summary, intended to apply to all operations in this path.
     *
     * @type {string}
     * @memberof IPathItemObject
     */
    summary?: string;
    /**
     * An optional, string description, intended to apply to all operations in this
     * path. CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IPathItemObject
     */
    description?: string;
    /**
     * A definition of a GET operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    get?: IOperationObject & IExtension;
    /**
     * A definition of a PUT operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    put?: IOperationObject & IExtension;
    /**
     * A definition of a POST operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    post?: IOperationObject & IExtension;
    /**
     * A definition of a DELETE operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    delete?: IOperationObject & IExtension;
    /**
     * A definition of a OPTIONS operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    options?: IOperationObject & IExtension;
    /**
     * A definition of a HEAD operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    head?: IOperationObject & IExtension;
    /**
     * A definition of a PATCH operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    patch?: IOperationObject & IExtension;
    /**
     * A definition of a TRACE operation on this path.
     *
     * @type {(IOperationObject & IExtension)}
     * @memberof IPathItemObject
     */
    trace?: IOperationObject & IExtension;
    /**
     * An alternative server array to service all operations in this path.
     *
     * @type {[IServerObject]}
     * @memberof IPathItemObject
     */
    servers?: [IServerObject];
    /**
     * A list of parameters that are applicable for all the operations
     * described under this path. These parameters can be overridden at
     * the operation level, but cannot be removed there.
     *
     * The list MUST NOT include duplicated parameters.
     * A unique parameter is defined by a combination of a name and location.
     * The list can use the Reference Object to link to parameters that
     * are defined at the OpenAPI Object's components/parameters.
     *
     * @type null
     * @memberof IPathItemObject
     */
    parameters?: IParameterObject[] | IReferenceObject[];
}

/**
 * The Link object represents a possible design-time link for a response
 *
 * @export
 * @interface ILinkObject
 */
export interface ILinkObject {
    /**
     * A relative or absolute URI reference to an OAS operation. This field is mutually exclusive
     * of the operationId field, and MUST point to an Operation Object. Relative operationRef
     * values MAY be used to locate an existing Operation Object in the OpenAPI definition.
     *
     * @type {string}
     * @memberof ILinkObject
     */
    operationRef?: string;
    /**
     * The name of an existing, resolvable OAS operation, as defined with a unique operationId.
     * This field is mutually exclusive of the operationRef field.
     *
     * @type {string}
     * @memberof ILinkObject
     */
    operationId?: string;
    /**
     * A map representing parameters to pass to an operation as specified with operationId or
     * identified via operationRef. The key is the parameter name to be used, whereas the
     * value can be a constant or an expression to be evaluated and passed to the linked operation.
     * The parameter name can be qualified using the parameter location [{in}.]{name}
     * for operations that use the same parameter name in different
     * locations (e.g. path.id).
     *
     * @type {IDictionaryOf<any>}
     * @memberof ILinkObject
     */
    parameters?: IDictionaryOf<any>;
    /**
     * A literal value or {expression} to use as a request body when calling the target operation.
     *
     * @type {IDictionaryOf<any>}
     * @memberof ILinkObject
     */
    requestBody?: IDictionaryOf<any>;
    /**
     * A description of the link. CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof ILinkObject
     */
    description?: string;
    /**
     * A server object to be used by the target operation
     *
     * @type {IServerObject}
     * @memberof ILinkObject
     */
    server?: IServerObject;
}

/**
 * When request bodies or response payloads may be one of a number of different
 * schemas, a discriminator object can be used to aid in serialization,
 * deserialization, and validation.
 *
 * @export
 * @interface IDiscriminatorObject
 */
export interface IDiscriminatorObject {
    /**
     *  The name of the property in the payload that will hold the
     * discriminator value.
     *
     * @type {string}
     * @memberof IDiscriminatorObject
     */
    propertyName: string;
    /**
     * An object to hold mappings between payload values and schema names or
     * references.
     *
     * @type {IDictionaryOf<string>}
     * @memberof IDiscriminatorObject
     */
    mapping?: IDictionaryOf<string>;
}

/**
 * Holds the relative paths to the individual endpoints and their operations.
 * The path is appended to the URL from the Server Object in order to construct
 * the full URL. The Paths MAY be empty, due to ACL constraints.
 *
 * For Keys:
 * A relative path to an individual endpoint. The field name MUST begin with a
 * forward slash (/). The path is appended (no relative URL resolution) to the expanded
 * URL from the Server Object's url field in order to construct the full URL.
 * Path templating is allowed. When matching URLs, concrete (non-templated) paths
 * would be matched before their templated counterparts. Templated paths with the
 * same hierarchy but different templated names MUST NOT exist as they are identical.
 * In case of ambiguous matching, it's up to the tooling to decide which one to use.
 *
 * @export
 * @interface IPathsObject
 * @extends {IDictionaryOf<IPathItemObject>}
 */
export interface IPathsObject extends IDictionaryOf<IPathItemObject> { }

/**
 * Defines a security scheme that can be used by the operations. Supported schemes
 * are HTTP authentication, an API key (either as a header, a cookie parameter or
 * as a query parameter), OAuth2's common flows (implicit, password,
 * client credentials and authorization code) as defined in RFC6749,
 * and OpenID Connect Discovery.
 *
 * @export
 * @interface ISecuritySchemeObject
 */
export interface ISecuritySchemeObject {
    /**
     * The type of the security scheme. Valid values are "apiKey",
     * "http", "oauth2", "openIdConnect".
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    type: string;
    /**
     * A short description for security scheme. CommonMark syntax
     * MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    description?: string;
    /**
     *  The name of the header, query or cookie parameter to be used.
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    name: string;
    /**
     *  The location of the API key. Valid values are "query", "header" or "cookie".
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    in: string;
    /**
     * The name of the HTTP Authorization scheme to be used in the Authorization
     * header as defined in RFC7235. The values used SHOULD be registered in the
     * IANA Authentication Scheme registry.
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    scheme: string;
    /**
     * A hint to the client to identify how the bearer token is formatted.
     * Bearer tokens are usually generated by an authorization server,
     * so this information is primarily for documentation purposes.
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    bearerFormat?: string;
    /**
     *  An object containing configuration information for the flow types supported.
     *
     * @type {IOAuthFlowsObject}
     * @memberof ISecuritySchemeObject
     */
    flows: IOAuthFlowsObject;
    /**
     * OpenId Connect URL to discover OAuth2 configuration values.
     * This MUST be in the form of a URL.
     *
     * @type {string}
     * @memberof ISecuritySchemeObject
     */
    openIdConnectUrl: string;
}

/**
 * Lists the required security schemes to execute this operation. The name used
 * for each property MUST correspond to a security scheme declared in the
 * Security Schemes under the Components Object.
 *
 * @export
 * @interface ISecurityRequirementObject
 * @extends {IDictionaryOf<string>}
 */
export interface ISecurityRequirementObject extends IDictionaryOf<string> { }

/**
 * Allows referencing an external resource for extended documentation.
 *
 * @export
 * @interface IExternalDocumentationObject
 */
export interface IExternalDocumentationObject {
    /**
     * The URL for the target documentation. Value MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IExternalDocumentationObject
     */
    url: string;
    /**
     * A short description of the target documentation. CommonMark syntax
     * MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IExternalDocumentationObject
     */
    description?: string;
}

/**
 * Adds metadata to a single tag that is used by the Operation Object.
 * It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 *
 * @export
 * @interface ITagObject
 */
export interface ITagObject {
    /**
     * The name of the tag.
     *
     * @type {string}
     * @memberof ITagObject
     */
    name: string;
    /**
     * A short description for the tag. CommonMark syntax MAY be
     * used for rich text representation.
     *
     * @type {string}
     * @memberof ITagObject
     */
    description?: string;
    /**
     * Additional external documentation for this tag.
     *
     * @type {IExternalDocumentationObject}
     * @memberof ITagObject
     */
    externalDocs?: IExternalDocumentationObject;
}

/**
 * Contact information for the exposed API.
 *
 * @export
 * @interface IContactObject
 */
export interface IContactObject {
    /**
     * The identifying name of the contact person/organization.
     *
     * @type {string}
     * @memberof IContactObject
     */
    name?: string;
    /**
     * The URL pointing to the contact information. MUST be in the format of a URL.
     *
     * @type {string}
     * @memberof IContactObject
     */
    url?: string;
    /**
     * The email address of the contact person/organization. MUST be in the format
     * of an email address.
     *
     * @type {string}
     * @memberof IContactObject
     */
    email?: string;
}

/**
 * Describes a single request body.
 *
 * @export
 * @interface IRequestBodyObject
 */
export interface IRequestBodyObject {
    /**
     * The content of the request body. The key is a media type or media
     * type range and the value describes it. For requests that match
     * multiple keys, only the most specific key is applicable.
     * e.g. text/plain overrides text/*
     *
     * @type {IDictionaryOf<IMediaTypeObject>}
     * @memberof IRequestBodyObject
     */
    content?: IDictionaryOf<IMediaTypeObject>;
    /**
     * A brief description of the request body. This could contain examples
     * of use. CommonMark syntax MAY be used for rich text representation.
     *
     * @type {string}
     * @memberof IRequestBodyObject
     */
    description?: string;
    /**
     * Determines if the request body is required in the request. Defaults to false.
     *
     * @type {boolean}
     * @memberof IRequestBodyObject
     */
    required?: boolean;
}

/**
 * This is the root document object of the OpenAPI document.
 *
 * @export
 * @interface IOpenAPI
 */
export interface IOpenAPI {
    /**
     * REQUIRED. This string MUST be the semantic version number of the OpenAPI
     * Specification version that the OpenAPI document uses. The openapi field
     * SHOULD be used by tooling specifications and clients to interpret the
     * OpenAPI document. This is not related to the API info.version string.
     *
     * @type {string}
     * @memberof IOpenAPI
     */
    openapi: string;
    /**
     * Provides metadata about the API.
     * The metadata MAY be used by tooling as required.
     *
     * @type {IInfoObject?}
     * @memberof IOpenAPI
     */
    info: IInfoObject;
    /**
     * An array of Server Objects, which provide connectivity information to
     * a target server. If the servers property is not provided, or is an
     * empty array, the default value would be a Server Object with a
     * url value of /.
     *
     * @type {IServersObject}
     * @memberof IOpenAPI
     */
    servers: IServerObject[];
    /**
     * The available paths and operations for the API.
     *
     * @type {IPathsObject}
     * @memberof IOpenAPI
     */
    paths: IPathsObject;
    /**
     * An element to hold various schemas for the specification.
     *
     * @type {IComponentsObject}
     * @memberof IOpenAPI
     */
    components: IComponentsObject;
    /**
     * A declaration of which security mechanisms can be used across the API.
     * The list of values includes alternative security requirement objects
     * that can be used.
     *
     * Only one of the security requirement objects need to be satisfied to
     * authorize a request. Individual operations can override this
     * definition. To make security optional, an empty security requirement
     * ({}) can be included in the array.
     *
     * @type {ISecurityRequirementObject}
     * @memberof IOpenAPI
     */
    security: ISecurityRequirementObject[];
    /**
     * A list of tags used by the specification with additional metadata.
     * The order of the tags can be used to reflect on their order by the
     * parsing tools.
     *
     * Not all tags that are used by the Operation Object must be declared.
     * The tags that are not declared MAY be organized randomly or based
     * on the tools' logic. Each tag name in the list MUST be unique.
     *
     * @type {ITagObject[]}
     * @memberof IOpenAPI
     */
    tags: ITagObject[];
    /**
     * Additional external documentation.
     *
     * @type {IExternalDocumentationObject}
     * @memberof IOpenAPI
     */
    externalDocs: IExternalDocumentationObject;
}
